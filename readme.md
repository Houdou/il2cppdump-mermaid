# il2cppdump-mermaid

A small script to generate mermaid code from [Il2CppInspector](https://github.com/djkaty/Il2CppInspector) generated code that help you understand the relations

## Usage

- Export code grouped by namespace in Il2CppInspector
  - Recommended configs
    - File per namespace
    - Suppress comments
    - Attempt to generate output that compiles
- Run the script in the exported folder by `npx il2cppdump-mermaid namespace|class`
- Script will read all .cs file (excluding global) & generate mermaid code

Hanv't test it against any other full scope
Totally not guaranteed to work with other projects

## Next steps
- file name filter `--pathPattern=Logic`
- class name filter arguments `--classPattern=Character`
- namespace filter `--namespace=Towa`
- excluding sub-folder `--no-subfolder`
