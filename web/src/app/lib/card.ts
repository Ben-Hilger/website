export default class CardInfo {
    constructor(public id: number, 
                public title: string, 
                public description: string,
                public link: string|null = null,
                public target: string = "_blank") {}
}

