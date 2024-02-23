- [[GLint]]
- [[glGenTextures()]]
- [[glDeleteTextures()]]
- [[glGetIntegerv()]]
- [[glActiveTexture()]]
- [[glBindTexture()]]
- [[glTexImage2D()]]
- [[glTexParameteri()]]

-----
這段程式碼定義了名為 `Texture` 的類別，位於 `Core` 命名空間中。這個類別用於表示[[OpenGL]]中的紋理對象，並提供了一些操作紋理的功能。

以下是這個類別的一些重要成員和功能：

- **建構子**：
  - `Texture(unsigned int channels, int width, int height, const void *data)`：根據給定的通道數、寬度、高度和數據創建一個紋理對象。這個建構子會生成一個OpenGL紋理對象，並將指定的數據上傳到紋理中。

- **析構子**：
  - `~Texture()`：Texture的析構子，用於釋放紋理對象佔用的資源，包括OpenGL的紋理對象。

- **移動建構子和移動賦值運算符**：
  - `Texture(Texture &&texture)`：移動建構子，用於將其他Texture對象的資源移動到新建立的對象中。
  - `Texture &operator=(Texture &&other)`：移動賦值運算符，用於將其他Texture對象的資源移動到現有對象中。

- **成員函式**：
  - `GLuint GetTextureId() const`：返回紋理對象的OpenGL ID。
  - `void Bind(int slot) const`：將紋理綁定到指定的紋理單元（slot）上。
  - `void Unbind() const`：解綁紋理。
  - `void UpdateData(unsigned int channels, int width, int height, const void *data)`：更新紋理的數據。這個函式用於重新上傳紋理數據，並修改紋理的寬度、高度和通道數。
  - `GLuint m_TextureId` : 用於存儲紋理對象的OpenGL ID。

這個類別提供了封裝OpenGL紋理對象的功能，包括創建、釋放、綁定、解綁和更新紋理數據等操作，使得使用者可以更方便地管理和操作OpenGL的紋理。