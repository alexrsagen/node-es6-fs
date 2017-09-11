"use strict";

const os = require("os");
const fs = require("fs");
const path = require("path");
const util = require("util");

const custom = {
    recursedir: (dirPath, options) => {
      options = Object.assign({
        includeDirectories: false
      }, options);

      return FS.readdir(dirPath)
      .then(entities => {
        let promises = [];

        entities.forEach(entity => {
          const entityPath = path.join(dirPath, entity);
          const promise = FS.stat(entityPath)
          .then(stats => {
            if (stats.isDirectory()) {
              return FS.recurseDir(entityPath)
              .then(paths => {
                if (options.includeDirectories) {
                  return [entityPath].concat(paths);
                }

                return paths;
              });
            }

            return entityPath;
          });

          promises.push(promise);
        });

        return Promise.all(promises)
        .then(paths => {
          return [].concat.apply([], paths);
        });
      });
    },
    recursedirSync: (dirPath, options) => {
      options = Object.assign({
        includeDirectories: false
      }, options);

      let paths = [];
      const entities = FS.readdirSync(dirPath);
      entities.forEach(entity => {
        const entityPath = path.join(dirPath, entity);
        const stats = FS.statSync(entityPath);
        if (stats.isDirectory()) {
          const entityPaths = FS.recurseDirSync(entityPath);
          if (options.includeDirectories) {
            paths.push([entityPath].concat(entityPaths));
          } else {
            paths.push(entityPaths);
          }
        } else {
          paths.push(entityPath);
        }
      });

      return [].concat.apply([], paths);
    }
};

let promisified = {};
const FS = new Proxy(fs, {
    get: (target, property, receiver) => {
        // Return custom properties
        if (custom.hasOwnProperty(property)) {
            return custom[property];
        }

        // Promisify existing fs functions
        if (
            target.hasOwnProperty(property) &&
            typeof target[property] === "function" &&
            property.indexOf("Sync") === -1
        ) {
            promisified[property] = util.promisify(target[property]);
            return promisified[property];
        } else {
            return target[property];
        }
    },
    has: (target, prop) => {
        return custom.hasOwnProperty(prop) ||
               target.hasOwnProperty(prop);
    },
    ownKeys: (target) => {
        let props = Object.getOwnPropertyNames(target);
        const customProps = Object.getOwnPropertyNames(custom);
        for (const i in customProps) {
            const prop = customProps[i];
            if (!props.includes(prop)) {
                props.push(prop);
            }
        }
        return props;
    }
});

module.exports = FS;
