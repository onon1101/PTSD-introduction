#### 函數:
- [[Mix_LoadMUS()]]
- [[Mix_VolumeMusic()]]
- m_BGM.reset() : 釋放原本指向的物件，並重新指向新物件
- [[Mix_PlayMusic()]]
- [[Mix_FadeInMusic()]]
- [[Mix_FadeOutMusic()]]
- [[Mix_PauseMusic()]]
- [[Mix_ResumeMusic()]]
- [[Mix_FreeMusic()]]
----
這段程式碼定義了名為 `Util::BGM` 的類別，用於處理背景音樂。以下是這個類別中各個成員函式和私有部分的介紹：
#### 函數介紹:
- `int GetVolume() const;`：檢索當前背景音樂的音量。
- `void SetVolume(int volume);`：設置背景音樂的音量，範圍為 (0, 128)。音量為 0 時為靜音，為 128 時為最大音量。
- `void LoadMedia(const std::string &path);`：從指定的文件路徑加載背景音樂。
- `void VolumeUp(int step = 1);`：將背景音樂音量增加指定步長。
- `void VolumeDown(int step = 1);`：將背景音樂音量減少指定步長。
- `void Play(int loop = -1);`：播放背景音樂，可指定循環播放的次數。默認值 -1 表示無限循環播放。
- `void FadeIn(int tick, int loop = -1);`：漸入播放背景音樂，指定漸入時間和循環播放的次數。
- `void FadeOut(int tick);`：漸出停止播放背景音樂，指定漸出時間。
- `void Pause();`：暫停當前播放的背景音樂。
- `void Resume();`：恢復暫停的背景音樂播放。
#### 私有部分包括：
- `struct MusicDeleter`：用於自定義刪除 `Mix_Music` 資源的函式物件。它重載了函式呼叫運算子 `operator()` 以釋放 `Mix_Music` 資源。
- `std::`[[unique_ptr]]`<`[[Mix_music]]`, MusicDeleter> m_BGM;`：用於管理背景音樂資源的獨有指針，使用自定義的刪除器 `MusicDeleter` 來釋放資源，從而確保資源在適當時機被釋放。