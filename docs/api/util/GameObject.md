
----
這段程式碼定義了一個名為 GameObject 的類別，用於表示遊戲中的物件。讓我們來逐一解釋每個函式和成員：

- **建構函式**：
   - `GameObject() = default;`：預設建構函式，初始化一個空的 GameObject 物件。
   - `GameObject(std::unique_ptr<Core::Drawable> drawable, const float zIndex, const std::vector<std::shared_ptr<GameObject>> &children = std::vector<std::shared_ptr<GameObject>>());`：帶有 drawable、zIndex 和 children 參數的建構函式，用來初始化 GameObject 物件的成員。

-  **刪除函式**：
   - `GameObject(const GameObject &other) = delete;`：刪除拷貝建構函式，防止對象的拷貝建構。
   - `GameObject(GameObject &&other) = delete;`：刪除移動建構函式，防止對象的移動建構。
   - `GameObject &operator=(const GameObject &other) = delete;`：刪除賦值運算符，防止對象的賦值操作。

- **析構函式**：
   - `virtual ~GameObject() = default;`：虛擬析構函式，釋放 GameObject 物件所佔用的資源。

- **成員函式**：
   - `float GetZIndex() const;`：返回物件的 Z 軸排序索引。
   - `std::vector<std::shared_ptr<GameObject>> &GetChildren();`：返回物件的子物件列表。
   - `void SetZIndex(float index);`：設置物件的 Z 軸排序索引。
   - `void SetDrawable(std::unique_ptr<Core::Drawable> drawable);`：設置物件的 Drawable 成員。
   - `void AppendChild(std::shared_ptr<GameObject> child);`：將一個子物件添加到物件的子物件列表中。
   - `virtual void Start() = 0;`：純虛擬函式，用於啟動遊戲物件。
   - `virtual void Update(const Util::Transform &transform = Util::Transform()) = 0;`：純虛擬函式，用於更新遊戲物件。
   - `void Draw();`：用於繪製物件。from [[Drawable]]

-  **私有成員**：
   - `Util::Transform m_Transform;`：物件的變換資訊。
   - `std::unique_ptr<Core::Drawable> m_Drawable = nullptr;`：指向可繪製部分的唯一指標。
   - `std::vector<std::shared_ptr<GameObject>> m_Children;`：存放指向其他 `GameObject` 物件的共享指標，表示該物件的子物件。
   - `float m_ZIndex;`：物件的 Z 軸排序索引。
   - `bool m_Visible = true` :是否可見。

請注意，該類別的建構函式和析構函式使用了默認實現，而拷貝建構、移動建構和賦值操作被刪除，這樣可以防止意外的拷貝或移動操作，從而確保物件的資源安全。