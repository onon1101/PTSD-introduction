- [[glCreateProgram()]]
- [[Shader]]
- [[glAttachShader()]]
- [[glDetachShader()]]
- [[glDeleteProgram()]]
- [[glUseProgram()]]
- [[glGetProgramiv()]]
- [[GL_TRUE]]
- [[GL_FALSE]]
- [[glGetProgramInfoLog()]]
- [[glValidateProgram()]]

----
這段程式碼定義了名為 `Program` 的類別，位於 `Core` 命名空間中。在[[OpenGL]]中，Program代表由多個Shader文件編譯和鏈接在一起的對象。通常，一個Program至少需要包含一個頂點着色器（vertex shader）和一個片段着色器（fragment shader），但也可以包含其他可選的中間層，如幾何着色器（geometry shader）或曲面劃分着色器（tessellation shader）。

以下是這個類別的一些重要成員和功能：

- **建構子**：
  - `Program(const std::string &vertexShaderFilepath, const std::string &fragmentShaderFilepath)`：根據給定的頂點着色器和片段着色器文件路徑，創建一個Program對象。這個建構子負責將這些Shader文件編譯並鏈接成一個Program。
  - `Program(const Program &) = delete`：刪除了拷貝建構子，禁止Program對象的拷貝構造。
  - `Program(Program &&other)`：移動建構子，用於將其他Program對象的資源移動到新建立的對象中。

- **析構子**：
  - `~Program()`：Program的析構子，用於釋放Program對象佔用的資源，包括[[OpenGL]]的Program對象。

- **成員函式**：
  - `GLuint GetId() const`：返回Program對象的[[OpenGL]] ID。
  - `void Bind() const`：將Program綁定到[[OpenGL]]上下文中，使其成為當前使用的Program。
  - `void Unbind() const`：解綁Program，將其從[[OpenGL]]上下文中解除綁定。
  - `void Validate() const`：驗證Program對象的有效性，檢查其是否可以在當前[[OpenGL]]上下文中使用。

- **私有成員函式**：
  - `void CheckStatus() const`：檢查Program對象的編譯和鏈接狀態，並在出現錯誤時拋出異常。
  - `GLuint m_ProgramId` : 用於存儲Program對象的[[OpenGL]] ID。

這個類別提供了封裝[[OpenGL]] Program的功能，包括創建、編譯、鏈接、綁定和解綁等操作，使得使用者可以更方便地管理和操作OpenGL的[[Shader]]程序。