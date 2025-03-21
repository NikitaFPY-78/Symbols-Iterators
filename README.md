---

## Символы и генераторы

[![Build status](https://ci.appveyor.com/api/projects/status/rrv6ua4t4co8sh00?svg=true)](https://ci.appveyor.com/project/ArtKonX/ajs-homeworks-symbols-iterators-generators-symbols-a8ki6)

### Легенда

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.

### Описание

Используйте следующую заготовку для организации перебора класса `Team`:
```javascript
class Team {
  ...
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }

}
```

---