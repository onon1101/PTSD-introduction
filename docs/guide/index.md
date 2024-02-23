# Quick Start

## Required

```txt
Required: Git, CMake, C/C++ Compiler, OpenGL Implementation
```

## Download file

```bash
git clone https://github.com/ntut-open-source-club/practical-tools-for-simple-design.git
cd practical-tools-for-simple-design
cmake -B build
cmake --build build
```

```
‍If Ninja Build is install use cmake -B build -G Ninja to speed compile time

‍For older versions of CMake(<3.13? verification needed) use

mkdir build
cd build
cmake .
cmake --build .
if the -B flag is unsupported

‍If using Neovim or other LSP supported editors, append -DCMAKE_EXPORT_COMPILE_COMMANDS=ON to the generation command for clangd to work

```

## IDE

### VScode

### Clion

### Neovim
