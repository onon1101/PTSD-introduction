- [[IMG_Load()]]
- [[SDL_FreeSurface()]]
- [[Texture]]
- [[Transform]]
- [[Program]]
- [[VertexArray]]
- [[VertexBuffer]]
- [[IndexBuffer]]
- [[UniformBuffer]]
- [[SDL_Surface]]
- [[glGetUniformLocation()]]
- [[glUniform1i()]]
- [[TransformUtils]]

----
這段程式碼定義了名為 `Image` 的類別，位於 `Util` 命名空間中，用於表示圖像並實現可繪製介面（`Drawable`）。下面是這個類別的一些重要特點和功能：

### `Image` 類別介紹

`Image` 類別表示一個圖像對象，可以在畫布上繪製。它繼承自 `Core::Drawable` 類別，並實現了 `Draw` 函式，用於繪製圖像。

#### 成員函式：

- **建構子**：
  - `Image(const std::string &filepath)`：構造函式，接受一個 `std::string` 類型的參數 `filepath`，表示圖像文件的路徑，用於創建一個新的圖像對象。

- **成員函式**：
  - `void Draw(const Util::Transform &transform, const float zIndex) override`：繼承自 `Core::Drawable` 類別，用於繪製圖像。接受一個 `Util::Transform` 類型的參數 `transform`，表示變換（例如平移、旋轉、縮放）的屬性，以及一個 `float` 類型的參數 `zIndex`，表示圖像的 Z 軸索引。

- **私有成員函式**：
  - `void InitProgram()`：初始化程序（Program）對象。
  - `void InitVertexArray()`：初始化頂點數組（VertexArray）對象。
  - `void InitUniformBuffer(const Util::Transform &transform, const float zIndex = -1)`：初始化統一緩衝（Uniform Buffer）對象。

#### 私有成員變數：

- `std::unique_ptr<Core::Texture> m_Texture`：圖像的紋理（Texture）對象。
- `std::unique_ptr<SDL_Surface, std::function<void(SDL_Surface *)>> m_Surface`：圖像的表面（Surface）對象，使用 `std::function` 來自定義解構函式，用於釋放SDL表面的資源。
- `static std::unique_ptr<Core::Program> s_Program`：靜態成員變數，表示圖像的程序（Program）對象。
- `static std::unique_ptr<Core::VertexArray> s_VertexArray`：靜態成員變數，表示圖像的頂點數組（VertexArray）對象。
- `static std::unique_ptr<Core::UniformBuffer<Core::Matrices>> s_UniformBuffer`：靜態成員變數，表示圖像的統一緩衝（Uniform Buffer）對象。

透過 `Image` 類別，開發者可以方便地表示和繪製圖像，並且可以通過 `Draw` 函式設置圖像的位置、變換和 Z 軸索引。