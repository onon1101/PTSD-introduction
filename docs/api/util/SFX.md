#### 用到的含數:
- [[Mix_FreeMusic()]]
- [[Mix_LoadMUS()]]
- [[Mix_VolumeMusic()]]
- [[Mix_VolumeMusic()]]
- [[Mix_PlayMusic()]]
- m_BGM.reset() : 釋放原本指向的物件，並重新指向新物件
- [[Mix_FadeInMusic()]]
- [[Mix_FadeOutMusic()]]
- [[Mix_PauseMusic()]]
- [[Mix_ResumeMusic()]]

----
这个头文件定义了一个名为 `SFX` 的音效处理类，用于管理和控制音效的播放、音量等属性。以下是该类中各成员的详细说明：

这个头文件定义了一个名为 `SFX` 的类，用于处理音效。该类包含以下公共成员函数：

- `SFX(const std::string &path)`：初始化 `SFX` 对象并加载指定路径的音效文件。
- `GetVolume()`：获取当前音效的音量。
- `SetVolume(int volume)`：设置音效的音量。
- `LoadMedia(const std::string &path)`：重新加载音效文件。
- `VolumeUp(int step = 1)`：增加音效音量。
- `VolumeDown(int step = 1)`：减少音效音量。
- `Play(int loop = 0, int duration = -1)`：播放音效。
- `FadeIn(unsigned int tick, int loop = -1, unsigned int duration = -1)`：淡入音效。

私有部分
`ChunkDeleter` :用于释放 `Mix_Chunk` 对象
`std::unique_ptr<Mix_Chunk, ChunkDeleter>m_Chunk`: 用于管理音效资源的生命周期。

`SFX` 类的作用是提供一个简单易用的接口，用于管理游戏中的音效，并在游戏开发中增加音频方面的交互和沉浸感。