- [[glGenVertexArrays()]]
- [[glDeleteVertexArrays()]]
- [[glBindVertexArray()]]
- [[glEnableVertexAttribArray()]]
- [[glVertexAttribPointer()]]
- [[glDrawElements()]]
- [[GLint]]
- [[GL_FALSE]]
- [[VertexBuffer]]
- [[IndexBuffer]]

----
`VertexArray` 是一個用於封裝[[OpenGL]]頂點數組對象（Vertex Array Object）的類別。它提供了一個方便的方式來管理和操作頂點數組，並且有助於提高[[OpenGL]]應用的可讀性和可維護性。
#### 成員函式：
- **建構子**：
    - `VertexArray()`：構造函式，用於創建一個新的頂點數組對象。在構造函式中，會生成一個[[OpenGL]]的頂點數組ID，並初始化其他成員變數。
- **析構子**：
    
    - `~VertexArray()`：析構函式，用於釋放頂點數組對象所佔用的資源，包括[[OpenGL]]的頂點數組ID。
- **移動建構子和移動賦值運算符**：
    
    - `VertexArray(VertexArray &&other)`：移動建構子，用於將其他VertexArray對象的資源移動到新建立的對象中。
    - `VertexArray &operator=(VertexArray &&other)`：移動賦值運算符，用於將其他VertexArray對象的資源移動到現有對象中。
- **成員函式**：
    
    - `void Bind() const`：將頂點數組綁定到當前[[OpenGL]]上下文中。
    - `void Unbind() const`：解綁頂點數組。
    - `void AddVertexBuffer(std::unique_ptr<VertexBuffer> vertexBuffer)`：添加頂點緩衝對象到頂點數組中。這個函式接受一個 `std::unique_ptr<VertexBuffer>` 作為參數，將這個緩衝對象添加到頂點數組中。
    - `void SetIndexBuffer(std::unique_ptr<IndexBuffer> indexBuffer)`：設置索引緩衝對象。這個函式接受一個 `std::unique_ptr<IndexBuffer>` 作為參數，用於設置頂點數組的索引緩衝對象。
    - `void DrawTriangles() const`：用於繪製三角形。這個函式會根據頂點數組中的頂點緩衝對象和索引緩衝對象，繪製三角形。
#### 私有成員變數：
- `GLuint m_ArrayId`：頂點數組對象的OpenGL ID。
- `std::vector<std::unique_ptr<VertexBuffer>> m_VertexBuffers`：存儲頂點緩衝對象的向量。
- `std::unique_ptr<IndexBuffer> m_IndexBuffer`：存儲索引緩衝對象的唯一指針。

透過 `VertexArray` 類別，開發者可以方便地管理[[OpenGL]]頂點數組對象，進行頂點數據的設置、綁定和繪製等操作，同時遵循了現代C++的設計原則。