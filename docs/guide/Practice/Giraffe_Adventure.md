# Giraffe Adventure

- [Download](https://github.com/ntut-open-source-club/PTSD-Practice-Giraffe-Adventure)

## 敘述內容

這是一個基於 [PTSD](https://github.com/ntut-open-source-club/practical-tools-for-simple-design) 框架所打造的一個小小練習課程，主要目的為提供 OOPL2024F(物件導向實習) 的學生練習。

## 如何安裝

1. 下載此專案

```bash
git clone https://github.com/ntut-open-source-club/PTSD-Practice-Giraffe-Adventure --recursive
```

## 配置設定 (可選)

以下的 [config.hpp](PTSD/include/config.hpp) 都在此路徑上：`PTSD/include/config.hpp`

- 調整 `config.hpp` 當中的 `寬` 與 `高`，並設定為數值 `601`。

- 調整 `config.hpp` 當中的幀率 (一秒內螢幕更新的次數) ，預設為 60 fps。

- 調整 `config.hpp` 你想要的遊戲名稱。

## 任務

- [ ] 把在這個練習檔案裡面 (你必須自行尋找)，會出現一個物件名稱 `m_giraffe`，並且將該物件名稱的路徑變更為 Rescoures 資料夾底下的 `giraffe.png`。

- [ ] 想一想，如何使用鍵盤控制一隻該死的長頸鹿到紅色框框內。PS: 可以透過提供的 `API` 來查詢觸發鍵盤的條件。

- [ ] 今天，長頸鹿肚子餓了，而眾所周知長頸鹿最愛吃寶箱了。所以你必須讓長頸鹿碰觸到寶箱時，寶箱就會被消失。

- [ ] 蜜蜂是我們的好朋友，而你 我的朋友 寫一個程式讓蜜蜂動起來吧! 觀察一下各個文件的呼叫，試試看新增或者修改哪些 method 能讓蜜蜂動起來~

- [ ] 那該死的長頸鹿又餓了，因此他必須從每一扇門後面看看可憐的寶箱有沒有在裡面。你的任務是，當長頸鹿走過每一扇門後... 那扇門就要開啟。至此才算完成這一關卡。

- [ ] Design a program to countdown, stop animation after OK display.

###### Hint: 當你在上述某一項任務卡住的時候，多多看看每一份程式檔案。裡面會有一些長頸鹿拉下來的一坨提示 `TODO: ......`，去發現它吧! ~~帶領著長頸鹿成為海賊王~~

---

## 教學

### 任務一

在這個練習檔案裡面 (你必須自行尋找)，會出現一個物件名稱 `m_giraffe`，並且將該物件名稱的路徑變更為 `Rescoures` 資料夾底下的 `giraffe.png`。

首先你會看到一個灰色的格子，而我們只需要把灰色的盒子路徑，更改成長頸鹿的圖片路徑就可以。
```js title="src/AppStart.cpp"
void App::Start() {
    LOG_TRACE("Start");

    m_Giraffe = std::make_shared<Character>(GA_RESOURCE_DIR"/Image/Character/gray.png");
    m_Giraffe->SetPosition({-112.5f, -140.5f});
    m_Giraffe->SetZIndex(50);
    m_Root.AddChild(m_Giraffe);
}
```
下面是更改後的結果。
```js title="src/AppStart.cpp"
void App::Start() {
    LOG_TRACE("Start");

    m_Giraffe = std::make_shared<Character>(GA_RESOURCE_DIR"/Image/Character/giraffe.png"); // change
    m_Giraffe->SetPosition({-112.5f, -140.5f});
    m_Giraffe->SetZIndex(50);
    m_Root.AddChild(m_Giraffe);
}
```

### 任務二

```js title="include/AnimatedCharacter.hpp"
void SetPosition(const glm::vec2& Position) { m_Transform.translation = Position; }
```
接下來，我們需要讓長頸鹿可以移動。因此需要做到兩件事情，偵測鍵盤的觸發與觸發後的動作。觀察一下API會發現`Uil::Input::IsKeyPressed`專門用來偵測鍵盤的觸發。而`Uil::Keycode::{鍵盤按鍵}`可以用來偵測指定的按鍵觸發，當觸發之後長頸鹿就應該要移動了。

移動的方法非常的的簡單，先獲取當前長頸鹿的圖片位置，當按鍵觸發之後，在將圖片位置加上偏移量，最後在更新一下長頸鹿的位置，此時你就會驚喜的發現，長頸鹿能移動了。

```js title="src/AppUpdate.cpp"
    if (Util::Input::IsKeyPressed(Util::Keycode::W)) {
        m_Giraffe->SetPosition({m_Giraffe->GetPosition().x, m_Giraffe->GetPosition().y + 10});
    }

    if (Util::Input::IsKeyPressed(Util::Keycode::A)) {
        m_Giraffe->SetPosition({m_Giraffe->GetPosition().x - 10, m_Giraffe->GetPosition().y});
    }

    if (Util::Input::IsKeyPressed(Util::Keycode::S)) {
        m_Giraffe->SetPosition({m_Giraffe->GetPosition().x, m_Giraffe->GetPosition().y - 10});
    }

    if (Util::Input::IsKeyPressed(Util::Keycode::D)) {
        m_Giraffe->SetPosition({m_Giraffe->GetPosition().x + 10, m_Giraffe->GetPosition().y});
    }
```

### 任務三

此任務要實作偵測長頸鹿與寶箱的偵測，而此地方的邏輯也並不困難。首先我們先比對寶箱與長頸鹿的位置，如果他們各自的 `x` 與 `y` 是相同的，那麼碰撞就是正在發生的了。

```js title="include/Character.hpp"
[[nodiscard]] bool IfCollides(const std::shared_ptr<Character>& other) const {
        if (    m_Transform.translation.x + GetScaledSize().x/2 >= other->m_Transform.translation.x - other->GetScaledSize().x/2 &&
                m_Transform.translation.x - GetScaledSize().x/2 <= other->m_Transform.translation.x + other->GetScaledSize().x/2 &&
                m_Transform.translation.y + GetScaledSize().y/2 >= other->m_Transform.translation.y - other->GetScaledSize().y/2 &&
                m_Transform.translation.y - GetScaledSize().y/2 <= other->m_Transform.translation.y + other->GetScaledSize().y/2)
            return true;
        else
            return false;
    }
```


而根據題目說，如果長頸鹿撞到寶箱的話，那麼寶箱就會消失。
```js title="src/AppUpdate.cpp"

if (m_Phase == Phase::COLLIDE_DETECTION) {
        if (m_Giraffe->IfCollides(m_Chest)) {
            m_Chest->SetVisible(false);
        }
    }
```

### 任務四

讓小蜜蜂動起來。`SetLooping` 代表著如果有動畫的話，那是否動畫會一直重播，如果否的話就只會播一次。`Play` 代表著讓動畫動起來。


```js title="include/AnimatedCharacter.hpp"
void SetLooping(bool looping) {
        auto animation = std::dynamic_pointer_cast<Util::Animation>(m_Drawable);
        animation->SetLooping(looping);
    }

    void Play() {
        auto animation = std::dynamic_pointer_cast<Util::Animation>(m_Drawable);
        animation->Play();
    }

    void Pause() {
        auto animation = std::dynamic_pointer_cast<Util::Animation>(m_Drawable);
        animation->Pause();
    }
```

設定完成之後就能使用他了。
```js title="src/AppUpdate.cpp"
    if (m_Phase == Phase::BEE_ANIMATION) {
        m_Bee->SetLooping(true);
        m_Bee->Play();
    } else {
        m_Bee->SetLooping(false);
    }
```

### 任務五



```js title="src/AppUpate.cpp"
if (m_Phase == Phase::OPEN_THE_DOORS) {
        for (auto& door : m_Doors) {
            if (m_Giraffe->IfCollides(door)) {
                door->SetImage(GA_RESOURCE_DIR"/Image/Character/door_open.png");
            }
        }
    }
```

