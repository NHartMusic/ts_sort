export class Sorter {
    constructor(public collection: ) { }

    sort(): void {
        const { length } = this.collection

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {

                if (this.collection[j] > this.collection[j + 1]) {
                    const lefthand = this.collection[j]
                    this.collection[j] = this.collection[j + 1]
                    this.collection[j + 1] = lefthand
                }
            }
        }
    }
}