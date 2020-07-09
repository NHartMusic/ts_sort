class Sorter {
    constructor(public collection: number[] | string | LinkedList) { }

    sort(): void {
        const { length } = this.collection

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {

                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const lefthand = this.collection[j]
                        this.collection[j] = this.collection[j + 1]
                        this.collection[j + 1] = lefthand
                    }
                }

                if (typeof this.collection === 'string') {
                    this.collection.
                }

            }
        }
    }
}

const sorter = new Sorter([10, -3, 69, 0, 420])
sorter.sort()
console.log(sorter.collection)