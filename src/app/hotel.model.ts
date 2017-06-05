export class Hotel {
    constructor(public Distance: number,
                public EstablishmentId: number,
                public EstablishmentType: string,
                public Location: string,
                public MinCost: number,
                public Name: string,
                public Stars: number,
                public UserRating: number,
                public UserRatingTitle: string,
                public UserRatingCount: number,
                public ImageUrl: string,
                public ThumbnailUrl: string) {}
}