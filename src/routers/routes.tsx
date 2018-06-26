import AsyncComponent from './utils';

// 路由配置
export const Routes = [
    {
        path: '/',
        exact: true,
        component: AsyncComponent({
            loader: () => import('../modules/home/index')
        })
    },
    {
        path: '/about',
        component: AsyncComponent({
            loader: () => import('../modules/about/index')
        })
    },
    {
        path: '/topics',
        component: AsyncComponent({
            loader: () => import('../modules/topics/index')
        }),
        routes: [
            {
                path: '/topics/:topicId',
                component: AsyncComponent({
                    loader: () => import('../components/Topic/index')
                })
            }
        ]
    }
];
