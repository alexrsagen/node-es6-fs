# node-es6-fs
Promise wrapper written in ES6 for the Node.js filesystem API

## Installation
```
npm install es6-fs --save
```

## `FS` Custom asynchronous methods
##### `FS`.recurseDir(dirPath[, options])
Recurses a directory and returns all paths in the directory and all subdirectories.

Options:
- `includeDirectories` &lt;boolean&gt; (Defaults to `false`) - Whether to include directories in the returned paths (otherwise only files).

Returns a promise that will resolve to an array of paths.

## `FS` Custom synchronous methods
##### `FS`.recurseDirSync(dirPath[, options])
Recurses a directory and returns all paths in the directory and all subdirectories.

Options:
- `includeDirectories` &lt;boolean&gt; (Defaults to `false`) - Whether to include directories in the returned paths (otherwise only files).

Returns an array of paths.

## `FS` Asynchronous (promisified) methods

##### `FS`.access(path[, mode])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_access_path_mode_callback

##### `FS`.appendFile(file, data[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_appendfile_file_data_options_callback

##### `FS`.chmod(path, mode)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_chmod_path_mode_callback

##### `FS`.chown(path, uid, gid)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_chown_path_uid_gid_callback

##### `FS`.close(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_close_fd_callback

##### `FS`.exists(path)
Warning: Deprecated

See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_exists_path_callback

##### `FS`.fchmod(fd, mode)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fchmod_fd_mode_callback

##### `FS`.fchown(fd, uid, gid)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fchown_fd_uid_gid_callback

##### `FS`.fdatasync(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fdatasync_fd_callback

##### `FS`.fstat(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fstat_fd_callback

##### `FS`.fsync(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fsync_fd_callback

##### `FS`.ftruncate(fd, len)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_ftruncate_fd_len_callback

##### `FS`.futimes(fd, atime, mtime)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_futimes_fd_atime_mtime_callback

##### `FS`.lchmod(path, mode)
Note: Only available on macOS

See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_lchmod_path_mode_callback

##### `FS`.lchown(path, uid, gid)
Note: Only available on macOS

See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_lchown_path_uid_gid_callback

##### `FS`.link(existingPath, newPath)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_link_existingpath_newpath_callback

##### `FS`.lstat(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_lstat_path_callback

##### `FS`.mkdir(path[, mode])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_mkdir_path_mode_callback

##### `FS`.mkdtemp(prefix[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_mkdtemp_prefix_options_callback

##### `FS`.open(path, flags[, mode])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_open_path_flags_mode_callback

##### `FS`.readdir(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_readdir_path_options_callback

##### `FS`.readFile(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_readfile_path_options_callback

##### `FS`.readlink(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_readlink_path_options_callback

##### `FS`.read(fd, buffer, offset, length, position)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback

##### `FS`.realpath(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_realpath_path_options_callback

##### `FS`.rename(oldPath, newPath)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_rename_oldpath_newpath_callback

##### `FS`.rmdir(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_rmdir_path_callback

##### `FS`.stat(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_stat_path_callback

##### `FS`.symlink(target, path[, type])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_symlink_target_path_type_callback

##### `FS`.truncate(path, len)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_truncate_path_len_callback

##### `FS`.unlink(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_unlink_path_callback

##### `FS`.utimes(path, atime, mtime)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_utimes_path_atime_mtime_callback

##### `FS`.writeFile(file, data[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_writefile_file_data_options_callback

##### `FS`.write(fd, buffer[, offset[, length[, position]]])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback

##### `FS`.write(fd, string[, position[, encoding]])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_write_fd_string_position_encoding_callback

## `FS` Synchronous methods

##### `FS`.accessSync(path[, mode])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_accesssync_path_mode

##### `FS`.appendFileSync(file, data[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_appendfilesync_file_data_options

##### `FS`.chmodSync(path, mode)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_chmodsync_path_mode

##### `FS`.chownSync(path, uid, gid)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_chownsync_path_uid_gid

##### `FS`.closeSync(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_closesync_fd

##### `FS`.existsSync(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_existssync_path

##### `FS`.fchmodSync(fd, mode)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fchmodsync_fd_mode

##### `FS`.fchownSync(fd, uid, gid)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fchownsync_fd_uid_gid

##### `FS`.fdatasyncSync(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fdatasyncsync_fd

##### `FS`.fstatSync(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fstatsync_fd

##### `FS`.fsyncSync(fd)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_fsyncsync_fd

##### `FS`.ftruncateSync(fd, len)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_ftruncatesync_fd_len

##### `FS`.futimesSync(fd, atime, mtime)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_futimes_fd_atime_mtime_callback

##### `FS`.lchmodSync(path, mode)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_lchmodsync_path_mode

##### `FS`.lchownSync(path, uid, gid)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_lchownsync_path_uid_gid

##### `FS`.linkSync(existingPath, newPath)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_linksync_existingpath_newpath

##### `FS`.lstatSync(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_lstatsync_path

##### `FS`.mkdirSync(path[, mode])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_mkdirsync_path_mode

##### `FS`.mkdtempSync(prefix[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_mkdtempsync_prefix_options

##### `FS`.openSync(path, flags[, mode])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_opensync_path_flags_mode

##### `FS`.readdirSync(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_readdirsync_path_options

##### `FS`.readFileSync(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_readfilesync_path_options

##### `FS`.readlinkSync(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_readlinksync_path_options

##### `FS`.readSync(fd, buffer, offset, length, position)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position

##### `FS`.realpathSync(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_realpathsync_path_options

##### `FS`.renameSync(oldPath, newPath)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_renamesync_oldpath_newpath

##### `FS`.rmdirSync(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_rmdirsync_path

##### `FS`.statSync(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_statsync_path

##### `FS`.symlinkSync(target, path[, type])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_symlinksync_target_path_type

##### `FS`.truncateSync(path, len)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_truncatesync_path_len

##### `FS`.unlinkSync(path)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_unlinksync_path

##### `FS`.utimesSync(path, atime, mtime)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_utimessync_path_atime_mtime

##### `FS`.writeFileSync(file, data[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_writefilesync_file_data_options

##### `FS`.writeSync(fd, buffer[, offset[, length[, position]]])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position

##### `FS`.writeSync(fd, string[, position[, encoding]])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_writesync_fd_string_position_encoding

##### `FS`.createReadStream(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_createreadstream_path_options

##### `FS`.createWriteStream(path[, options])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_createwritestream_path_options

##### `FS`.watch(filename[, options][, listener])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_watch_filename_options_listener

##### `FS`.watchFile(filename[, options], listener)
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_watchfile_filename_options_listener

##### `FS`.unwatchFile(filename[, listener])
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_unwatchfile_filename_listener

## `FS` properties

##### `FS`.constants
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_constants

## `FS` sub-classes

##### `FS`.FSWatcher
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_class_fs_fswatcher

##### `FS`.ReadStream
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_class_fs_readstream

##### `FS`.Stats
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_class_fs_stats

##### `FS`.WriteStream
See https://nodejs.org/dist/latest/docs/api/fs.html#fs_class_fs_writestream


## Usage

#### Write a file
```javascript
const fs = require("es6-fs");

fs.writeFile("helloworld.txt", "Hello World!")
.then(() => console.log("File written!"))
.catch(err => console.error(err));
```

#### Read a file
```javascript
const fs = require("es6-fs");

fs.readFile("helloworld.txt")
.then(contents => console.log(contents)) // Hello World!
.catch(err => console.error(err));
```