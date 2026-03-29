

export interface Banner {
    id: number;
    title: string;
    imageUrl: string;
    url: string;
}


export const Banner: Banner[] = [
    { id: 1, title: 'Banner 1', imageUrl: '/images/banner/Banner 1.png', url: 'https://google.com' },
    { id: 2, title: 'Banner 2', imageUrl: '/images/banner/Banner 2.png', url: 'https://youtube.com' },
    { id: 3, title: 'Banner 3', imageUrl: '/images/banner/Banner 3.png', url: 'https://facebook.com' }
]

