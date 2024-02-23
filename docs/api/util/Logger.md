- [[set_pattern()]]
- [[set_level()]]
- [[get_level()]]

----
這段程式碼定義了一個名為 `Util::Logger` 的命名空間，其中包含了一組函式和枚舉，用於日誌記錄。以下是這段程式碼的功能說明：

- `enum class Level`: 定義了日誌的不同等級，包括 TRACE、DEBUG、INFO、WARN、ERROR 和 CRITICAL。

- `Init()`: 初始化日誌系統。

- `SetLevel(Level level)`: 設定日誌的記錄等級。

- `GetLevel()`: 獲取當前的日誌記錄等級。

- `LOG_TRACE(...)`: 寫入 TRACE 等級的日誌消息。

- `LOG_DEBUG(...)`: 寫入 DEBUG 等級的日誌消息。

- `LOG_INFO(...)`: 寫入 INFO 等級的日誌消息。

- `LOG_WARN(...)`: 寫入 WARN 等級的日誌消息。

- `LOG_ERROR(...)`: 寫入 ERROR 等級的日誌消息。

- `LOG_CRITICAL(...)`: 寫入 CRITICAL 等級的日誌消息。

這段程式碼使用了開源的 [[spdlog]] 函式庫來處理日誌記錄。通過定義這些函式和枚舉，程式可以方便地使用 [[spdlog]] 來記錄不同等級的日誌消息。