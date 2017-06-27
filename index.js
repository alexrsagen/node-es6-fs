"use strict";

const os = require("os");
const fs = require("fs");
const util = require("util");

class FS {}

// Asynchronous methods
FS.access             = util.promisify(fs.access);
FS.appendFile         = util.promisify(fs.appendFile);
FS.chmod              = util.promisify(fs.chmod);
FS.chown              = util.promisify(fs.chown);
FS.close              = util.promisify(fs.close);
FS.exists             = util.promisify(fs.exists);
FS.fchmod             = util.promisify(fs.fchmod);
FS.fchown             = util.promisify(fs.fchown);
FS.fdatasync          = util.promisify(fs.fdatasync);
FS.fstat              = util.promisify(fs.fstat);
FS.fsync              = util.promisify(fs.fsync);
FS.ftruncate          = util.promisify(fs.ftruncate);
FS.futimes            = util.promisify(fs.futimes);
if (os.platform() == "darwin") {
  FS.lchmod             = util.promisify(fs.lchmod);
  FS.lchown             = util.promisify(fs.lchown);
}
FS.link               = util.promisify(fs.link);
FS.lstat              = util.promisify(fs.lstat);
FS.mkdir              = util.promisify(fs.mkdir);
FS.mkdtemp            = util.promisify(fs.mkdtemp);
FS.open               = util.promisify(fs.open);
FS.readdir            = util.promisify(fs.readdir);
FS.readFile           = util.promisify(fs.readFile);
FS.readlink           = util.promisify(fs.readlink);
FS.read               = util.promisify(fs.read);
FS.realpath           = util.promisify(fs.realpath);
FS.rename             = util.promisify(fs.rename);
FS.rmdir              = util.promisify(fs.rmdir);
FS.stat               = util.promisify(fs.stat);
FS.symlink            = util.promisify(fs.symlink);
FS.truncate           = util.promisify(fs.truncate);
FS.unlink             = util.promisify(fs.unlink);
FS.utimes             = util.promisify(fs.utimes);
FS.writeFile          = util.promisify(fs.writeFile);
FS.write              = util.promisify(fs.write);

// Custom asynchronous methods
FS.recurseDir = (dirPath, options) => {
  options = Object.assign({
    includeDirectories: false
  }, options);

  return this.readdir(dirPath)
  .then(entities => {
    let promises = [];

    entities.forEach(entity => {
      const entityPath = path.join(dirPath, entity);
      const promise = this.stat(entityPath)
      .then(stats => {
        if (stats.isDirectory()) {
          return this.recurseDir(entityPath)
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
}

// Synchronous methods
FS.accessSync         = fs.accessSync;
FS.appendFileSync     = fs.appendFileSync;
FS.chmodSync          = fs.chmodSync;
FS.chownSync          = fs.chownSync;
FS.closeSync          = fs.closeSync;
FS.existsSync         = fs.existsSync;
FS.fchmodSync         = fs.fchmodSync;
FS.fchownSync         = fs.fchownSync;
FS.fdatasyncSync      = fs.fdatasyncSync;
FS.fstatSync          = fs.fstatSync;
FS.fsyncSync          = fs.fsyncSync;
FS.ftruncateSync      = fs.ftruncateSync;
FS.futimesSync        = fs.futimesSync;
FS.lchmodSync         = fs.lchmodSync;
FS.lchownSync         = fs.lchownSync;
FS.linkSync           = fs.linkSync;
FS.lstatSync          = fs.lstatSync;
FS.mkdirSync          = fs.mkdirSync;
FS.mkdtempSync        = fs.mkdtempSync;
FS.openSync           = fs.openSync;
FS.readdirSync        = fs.readdirSync;
FS.readFileSync       = fs.readFileSync;
FS.readlinkSync       = fs.readlinkSync;
FS.readSync           = fs.readSync;
FS.realpathSync       = fs.realpathSync;
FS.renameSync         = fs.renameSync;
FS.rmdirSync          = fs.rmdirSync;
FS.statSync           = fs.statSync;
FS.symlinkSync        = fs.symlinkSync;
FS.truncateSync       = fs.truncateSync;
FS.unlinkSync         = fs.unlinkSync;
FS.utimesSync         = fs.utimesSync;
FS.writeFileSync      = fs.writeFileSync;
FS.writeSync          = fs.writeSync;
FS.createReadStream   = fs.createReadStream;
FS.createWriteStream  = fs.createWriteStream;
FS.watch              = fs.watch;
FS.watchFile          = fs.watchFile;
FS.unwatchFile        = fs.unwatchFile;

// Custom synchronous methods
FS.recurseDirSync = (dirPath, options) => {
  options = Object.assign({
    includeDirectories: false
  }, options);

  let paths = [];
  const entities = this.readdirSync(dirPath);
  entities.forEach(entity => {
    const entityPath = path.join(dirPath, entity);
    const stats = this.statSync(entityPath);
    if (stats.isDirectory()) {
      const entityPaths = this.recurseDirSync(entityPath);
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

// Properties
FS.constants          = fs.constants;

// Classes
FS.FSWatcher          = fs.FSWatcher;
FS.ReadStream         = fs.ReadStream;
FS.Stats              = fs.Stats;
FS.WriteStream        = fs.WriteStream;

module.exports = FS;
