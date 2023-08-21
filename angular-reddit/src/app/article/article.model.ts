export class Article {
    link: string;
    title: string;
    votes: number;
    
    constructor(link: string, title: string, votes?: number) {
        this.link = link;
        this.title = title;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1
    }

    voteDown(): void {
        this.votes -= 1
    }

    domain(): string {
        try {
          const domainAndPath = this.link.split('//')[1];
          return domainAndPath.split('/')[0];
        } catch(err) {
          return '';
        }
      }
}