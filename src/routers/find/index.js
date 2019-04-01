export default {
    path: '/find',
    component: () => import("@/views/find/index.vue"),
    children: [{
        path: 'news',
        component: () => import('../../components/news.vue'),
    }, 
    {
        path: 'Trailer',
        component: () => import('../../components/Trailer.vue'),
    }, 
    {
        path: 'Ranking List',
        component: () => import('../../components/Ranking List.vue'),
    }, 
    {
        path: 'Film review',
        component: () => import('../../components/Film review.vue'),
    }]
}