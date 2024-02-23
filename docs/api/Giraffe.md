- [[GameObject]]
- [[Image]]
- [[Text]]
- [[Time]]
- [[Transform]]
- [[Drawable]]
- [[move()]]

----
這兩個類別都繼承自 `Util::GameObject`，並實作了其虛擬函式。`GiraffeText` 類別用於表示一個特定的文字物件，而 `Giraffe` 類別則用於表示另一種物件，可能是一個整體的場景物件或其他實體。

### `GiraffeText` 和 `Giraffe`：

#### `GiraffeText` 類別：

1. **建構子 `GiraffeText()` 和 `GiraffeText(std::string font, const int size, std::string text)`：**
   - `GiraffeText()` 是默認建構子，不接受任何參數。
   - `GiraffeText(std::string font, const int size, std::string text)` 是帶有三個參數的建構子，用於初始化 `GiraffeText` 物件的成員變數。
   - 它接受一個字串 `font` 作為字型、一個整數 `size` 作為字型大小、以及一個字串 `text` 作為要顯示的文字。
   - 在這個建構子中，使用了成員初始化列表，將參數的值分別賦值給對應的成員變數。

2. **析構子 `~GiraffeText() override = default;`：**
   - 這是 `GiraffeText` 類別的虛擬析構子，被設定為默認實作，即使用編譯器生成的析構子。

3. **成員函式 `void Start() override;` 和 `void Update(const Util::Transform &transform = Util::Transform()) override;`：**
   - 這兩個成員函式分別是虛擬函式 `Start` 和 `Update` 的實作。
   - 在 `Start` 函式中，可能包含一些初始化 `GiraffeText` 物件時需要執行的操作。
   - 在 `Update` 函式中，可能包含更新 `GiraffeText` 物件狀態的操作，可以接受一個 `Util::Transform` 物件作為參數，預設值為 `Util::Transform()`。

4. **成員變數 `std::string m_Font`、`int m_Size` 和 `std::string m_Text`：**
   - 分別代表了字型、字型大小和要顯示的文字內容。

#### `Giraffe` 類別：

1. **成員函式 `void Start() override;` 和 `void Update(const Util::Transform &transform = Util::Transform()) override;`：**
   - 這兩個成員函式與 `GiraffeText` 類別中的函式作用相同，分別是虛擬函式 `Start` 和 `Update` 的實作。

2. **成員函式 `void Update(const Util::Transform &transform = Util::Transform()) override;`：**
   - 這是 `Giraffe` 類別獨有的成員函式，覆蓋了父類別中的 `Update` 函式。
   - 可能包含更新 `Giraffe` 物件狀態的操作，同樣可以接受一個 `Util::Transform` 物件作為參數，預設值為 `Util::Transform()`。

