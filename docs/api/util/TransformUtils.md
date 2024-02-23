- [[Transform]]
- [[mat4]]
- [[translate()]]
- [[rotate()]]
- [[scale()]]
- [[ortho()]]

----
這段程式碼定義了名為 `TransformToMat4` 和 `ConvertToUniformBufferData` 的函式，位於 `Util` 命名空間中，用於轉換轉換資料為OpenGL Uniform Buffer資料。

以下是這些函式的簡要說明：

- **`TransformToMat4` 函式**：
  - 這個函式接受一個 `Transform` 物件和一個 `float` 參數 `zIndex`，返回一個 `glm::mat4` 矩陣。
  - 這個函式的目的是將給定的 `Transform` 物件轉換為一個4x4的模型變換矩陣，同時將 `zIndex` 參數用於設置矩陣的Z軸位移量。

- **`ConvertToUniformBufferData` 函式**：
  - 這個函式接受一個 `Transform` 物件和一個 `float` 參數 `zIndex`，返回一個 `Core::Matrices` 結構。
  - 這個函式的目的是將給定的 `Transform` 物件轉換為一個 `Core::Matrices` 結構，這個結構包含了模型（Model）矩陣和投影（Projection）矩陣。同時，`zIndex` 參數用於設置投影矩陣的Z軸位移量。

這些函式的存在可以方便地將 `Transform` 物件轉換為OpenGL Uniform Buffer所需的資料格式，並且在進行圖形渲染時提供了方便的函式接口。

----
這段程式碼是一個函式 `ConvertToUniformBufferData`，接受三個參數：`transform`、`size` 和 `zIndex`，然後將它們轉換成一個 `Core::Matrices` 對象並返回。

讓我們來進行逐行解析：

1. `constexpr glm::mat4 eye(1.F);`：創建一個 `4x4` 的單位矩陣，命名為 `eye`。

2. `constexpr float nearClip = -100;` 和 `constexpr float farClip = 100;`：定義近剪裁面和遠剪裁面的值。

3. `auto projection = glm::ortho<float>(0.0F, 1.0F, 0.0F, 1.0F, nearClip, farClip);`：創建一個正交投影矩陣。

4. `auto view = glm::scale(eye, {1.F / WINDOW_WIDTH, 1.F / WINDOW_HEIGHT, 1.F}) * glm::translate(eye, {WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2, 0});`：創建一個視圖矩陣，通過對單位矩陣進行縮放和平移來實現，這部分代碼似乎是將視圖矩陣定義為將點映射到視口空間。

5. `auto model = glm::translate(eye, {transform.translation, zIndex}) * glm::rotate(eye, transform.rotation, glm::vec3(0, 0, 1)) * glm::scale(eye, {transform.scale * size, 1});`：創建一個模型矩陣，通過對單位矩陣進行平移、旋轉和縮放來實現，根據 `transform` 中的平移、旋轉和縮放來定義模型變換。

6. `Core::Matrices data = {model, projection * view};`：創建一個 `Core::Matrices` 對象，其中包含模型矩陣和投影視圖矩陣的乘積。

7. `return data;`：返回包含模型矩陣和投影視圖矩陣的 `Core::Matrices` 對象。

總結來說，這段程式碼的作用是根據給定的 `transform`、`size` 和 `zIndex` 參數，計算出模型矩陣和投影視圖矩陣，並將它們打包到 `Core::Matrices` 對象中返回。