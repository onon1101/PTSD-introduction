- [[VertexArray]]
- [[VertexBuffer]]
- [[IndexBuffer]]
- [[Program]]
- [[UniformBuffer]]
----
這段程式碼是用 C++ 語言撰寫的，定義了一個名為 `Triangle` 的類別。讓我們來逐步解析這段程式碼：

### 用途介紹：
這段程式碼的主要目的是建立一個用於渲染三角形的類別。它使用了一個名為 `Core::Program` 的類別來管理圖形繪製的程式，並使用 `Core::VertexArray` 和 `Core::UniformBuffer` 來管理三角形的頂點資訊和統一緩衝區。

### 程式碼解析：
1. `struct Matrices`：
	- **`glm::mat2 m_Model`：** 這是一個 `glm::mat2` 型別的成員變數 `m_Model`，代表一個 2x2 的矩陣，用於表示模型的變換（例如旋轉、縮放）。
	-  **`glm::mat2 m_Projection`：**  這是一個 `glm::mat2` 型別的成員變數 `m_Projection`，也代表一個 2x2 的矩陣，用於表示投影矩陣，通常用於將物體的三維座標轉換為二維座標，以便在屏幕上進行顯示。

1. **建構子 `Triangle()`：**
    
    - 這是 `Triangle` 類別的建構子，負責初始化物件時執行的操作。
    - 在這個例子中，建構子並沒有任何具體的實現，所以我們可以假設它是默認的空建構子。
2. ** `~Triangle() = default;`：**
    
    - 這是 `Triangle` 類別的析構子，負責釋放物件所擁有的資源。
    - 在這裡，使用了 `= default`，表示使用編譯器生成的默認析構子，因此沒有額外的釋放資源的操作。
3. ** `void Update()`：**
    
    - 這是 `Triangle` 類別的成員函式，負責更新物件的狀態。
    - 在這個例子中，函式並沒有任何具體的實現，所以我們可以假設它是一個空函式。
4. ** `Core::Program m_Program`：**
    
    - 這是一個 `Core::Program` 型別的成員變數，用於管理圖形繪製的程式。
    - 它被初始化為一個 `Core::Program` 物件，並使用了 "../assets/shaders/Triangle.vert" 和 "../assets/shaders/Triangle.frag" 兩個檔案作為頂點著色器和片段著色器。
5. ** `std::unique_ptr<Core::VertexArray> m_VertexArray`：**
    
    - 這是一個指向 `Core::VertexArray` 物件的智慧指標，用於管理三角形的頂點資訊。
    - 它被初始化為一個新的 `Core::VertexArray` 物件。
6. ** `std::unique_ptr<Core::UniformBuffer<Matrices>> m_Matrices`：**
    - 這是一個指向 `Core::UniformBuffer<Matrices>` 物件的智慧指標，用於管理統一緩衝區。
    - 它被初始化為一個新的 `Core::UniformBuffer<Matrices>` 物件，其中包含了 `m_Program`、"Triangle" 和 1 作為參數。
    
總的來說，這段程式碼定義了一個名為 `Triangle` 的類別，用於管理三角形的渲染相關資源，包括圖形繪製程式、頂點資訊和統一緩衝區。