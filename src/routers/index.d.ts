export interface RouteConfig {
    path: string
    component:  React.ComponentClass<any>
    exact?: boolean
    routes: [RouteConfig]
}