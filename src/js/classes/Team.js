export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) throw new Error('Такой персонаж уже существует в команде');
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            if (!this.members.has(character)) {
                this.members.add(character);
            }
        });
    }

    toArray() {
        return [...this.members];
    }

    *[Symbol.iterator]() {
        // это генератор
        // и здесь есть доступ к this
        // остаётся лишь правильно написать yield

        yield* this.members.keys();
    }
}