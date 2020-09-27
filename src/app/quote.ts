export class Quote {
    public upvote: number;
    public downvote: number;
    constructor(public name: string, public author: string, public quote: string, public quoteDescription: string, public date: Date) {
        this.upvote = 0;
        this.downvote = 0;

    }
}
