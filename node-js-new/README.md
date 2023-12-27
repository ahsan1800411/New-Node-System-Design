> linux command;
> open . # Open the current directory in Finder(for Mac)/ Explorer(for Linux)

Under the hood c/c++ code is goes to the compiler and then to the assembler and then to the machine code.

> to add things to the path in mac:> Users/usr/local/bin/yourfile

q: what is the first JS engine?

> A: SpiderMonkey (written in C++) by Brendan Eich in 1995 for Netscape Navigator now in Mozilla Firefox

> v8 is written in C++ by Google for Chrome and it is more faster than SpiderMonkey because it converts the JS code to machine code directly. while SpiderMonkey converts the JS code to the byte code and then the virtual machine converts the byte code to the machine code. so v8 is faster than SpiderMonkey.

> this is how node.js works.

# let says's we have to read a file in node.js, so what node.js does it send the instructions to v8. v8 sees the code and put it in event loop, the event loops send the instructions to libuv, libuv send the instructions to the kernel, the kernel send the instructions to the file system, then libux process the file and send back to event loop and then the callback run in the v8 and then the v8 send the data to the user.

In a Node.js environment, when a file needs to be read, the V8 JavaScript engine interprets and compiles the script, while the event loop orchestrates asynchronous operations. Utilizing the libuv library, Node.js delegates file system interactions to libuv, abstracting platform-specific details. Rather than directly involving the kernel, libuv manages tasks such as file operations and networking. Asynchronously, when a file read operation is initiated, libuv handles the communication with the file system. Upon completion, the associated callback is placed in the event loop queue. Subsequently, the event loop executes the callback using V8, allowing the user to process the file data or handle errors in a non-blocking manner. This architecture enables efficient utilization of system resources and facilitates responsive handling of concurrent operations in Node.js applications.

> process.nextTick() is used if we want to run a function asynchronously but at the end of the current event loop cycle means afer you main execution is done.

> in libuv there is a thread pool which by default has 4 threads. so if we have 4 files to read then it will read all the files at the same time. but if we have 5 files to read then it will read 4 files at the same time and the 5th file will be read after the first file is read.

> Network requests are not handled by the thread pool.

> characters Sets: Unicode, ASCII.

> Buffers:

for buffer great article: https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/
