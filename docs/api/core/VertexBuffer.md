- [[glGenBuffers()]]
- [[glBindBuffer()]]
- [[glBufferData()]]
- [[glDeleteBuffers()]]
- [[glBindBuffer()]]

-----
這段程式碼定義了名為 `VertexBuffer` 的類別，位於 `Core` 命名空間中，用於封裝[[OpenGL]]的頂點緩衝對象（Vertex Buffer Object）。

以下是這個類別的一些重要成員和功能：

- **建構子**：
  - `VertexBuffer(const std::vector<float> &vertices, unsigned int componentCount)`：構造函式，用於創建一個新的頂點緩衝對象。接受一個 `std::vector<float>` 類型的參數 `vertices`，表示頂點數據；以及一個 `unsigned int` 型參數 `componentCount`，表示每個頂點的元素個數。

- **析構子**：
  - `~VertexBuffer()`：析構函式，用於釋放頂點緩衝對象所佔用的資源，包括[[OpenGL]]的頂點緩衝ID。

- **移動建構子和移動賦值運算符**：
  - `VertexBuffer(VertexBuffer &&other)`：移動建構子，用於將其他VertexBuffer對象的資源移動到新建立的對象中。
  - `VertexBuffer &operator=(VertexBuffer &&other)`：移動賦值運算符，用於將其他VertexBuffer對象的資源移動到現有對象中。

- **成員函式**：
  - `unsigned int GetComponentCount() const`：返回頂點緩衝對象每個頂點的元素個數。
  - `GLenum GetType() const`：返回頂點緩衝對象的數據類型。
  - `void Bind() const`：將頂點緩衝對象綁定到當前[[OpenGL]]上下文中。
  - `void Unbind() const`：解綁頂點緩衝對象。
  - `GLuint m_BufferId` : 用於存儲頂點緩衝對象的[[OpenGL]] ID
  - `unsigned int m_ComponentCount`: 用於存儲每個頂點的元素個數
  - `GLenum m_Type = GL_FLOAT` :用於存儲每個頂點的數據類型
這個類別提供了封裝OpenGL頂點緩衝對象的功能，包括創建、釋放、綁定、解綁等操作。