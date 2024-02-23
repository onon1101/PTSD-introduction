- [[Program]]
- [[glGetUniformBlockIndex()]]
- [[glUniformBlockBinding()]]
- [[glGenBuffers()]]
- [[glBindBuffer()]]
- [[glBufferData()]]
- [[glBindBufferBase()]]
- [[glDeleteBuffers()]]
- [[glBufferSubData()]]
- [[glBindBufferBase()]]

-----
這段程式碼定義了名為 `UniformBuffer` 的類別模板，位於 `Core` 命名空間中，用於封裝[[OpenGL]]的統一緩衝對象（Uniform Buffer Object）。

### `UniformBuffer` 類別模板介紹

`UniformBuffer` 是一個用於封裝OpenGL統一緩衝對象的類別模板。它提供了一個通用的方式來管理和操作統一緩衝對象，並且使用了模板來實現更靈活的類型檢查。

#### 成員函式：

- **建構子**：
  - `UniformBuffer(const Program &program, const std::string &name, int binding)`：構造函式，用於創建一個新的統一緩衝對象。接受一個 `Program` 對象、一個 `std::string` 對象 `name` 和一個整數 `binding`，分別表示OpenGL程序（Program）對象、統一緩衝對象的名稱和綁定點（binding point）。

- **析構子**：
  - `~UniformBuffer()`：析構函式，用於釋放統一緩衝對象所佔用的資源，包括OpenGL的統一緩衝ID。

- **移動建構子和移動賦值運算符**：
  - `UniformBuffer(UniformBuffer &&other)`：移動建構子，用於將其他UniformBuffer對象的資源移動到新建立的對象中。
  - `UniformBuffer &operator=(UniformBuffer &&other)`：移動賦值運算符，用於將其他UniformBuffer對象的資源移動到現有對象中。

- **成員函式**：
  - `void SetData(int offset, const T &data)`：設置統一緩衝對象的數據。接受一個整數 `offset`，表示數據的偏移量，以及一個泛型參數 `data`，表示要設置的數據。

#### 私有成員變數：

- `GLuint m_Binding`：統一緩衝對象的綁定點。
- `GLuint m_BufferId`：統一緩衝對象的OpenGL ID。

透過 `UniformBuffer` 類別模板，開發者可以方便地管理OpenGL的統一緩衝對象，並進行數據的設置和管理。使用模板使得這個類別更具靈活性，可以適用於不同類型的數據。