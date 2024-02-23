- [[glGenBuffers()]]
- [[glBindBuffer()]]
- [[glBufferData()]]
- [[glDeleteBuffers()]]
- [[glBindBuffer()]]

----
這段程式碼定義了名為 `IndexBuffer` 的類別，位於 `Core` 命名空間中，用於封裝[[OpenGL]]的索引緩衝對象（Index Buffer Object）。

以下是這個類別的一些重要成員和功能：

- **建構子**：
  - `explicit IndexBuffer(const std::vector<unsigned int> &indices)`：構造函式，用於創建一個新的索引緩衝對象。接受一個 `std::vector<unsigned int>` 類型的參數 `indices`，表示索引數據。

- **析構子**：
  - `~IndexBuffer()`：析構函式，用於釋放索引緩衝對象所佔用的資源，包括OpenGL的索引緩衝ID。

- **移動建構子和移動賦值運算符**：
  - `IndexBuffer(IndexBuffer &&other)`：移動建構子，用於將其他IndexBuffer對象的資源移動到新建立的對象中。
  - `IndexBuffer &operator=(IndexBuffer &&other)`：移動賦值運算符，用於將其他IndexBuffer對象的資源移動到現有對象中。

- **成員函式**：
  - `size_t GetCount() const`：返回索引緩衝對象中的索引數量。
  - `void Bind() const`：將索引緩衝對象綁定到當前OpenGL上下文中。
  - `void Unbind() const`：解綁索引緩衝對象。

#### 私有成員變數：

- `GLuint m_BufferId`：索引緩衝對象的OpenGL ID。
- `size_t m_Count`：索引緩衝對象中的索引數量。

透過 `IndexBuffer` 類別，開發者可以方便地管理OpenGL的索引緩衝對象，並進行索引數據的設置、綁定和解綁等操作。