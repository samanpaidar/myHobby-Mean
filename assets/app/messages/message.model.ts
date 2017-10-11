export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;
    date: Date;
    

    constructor( content: string, username: string, messageId?: string, userId?: string,  date: Date) { 
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
        this.date = date;
        
    }
}