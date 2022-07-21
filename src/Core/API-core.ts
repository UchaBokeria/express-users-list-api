let __APP

export const Core = async (_App) => {
    __APP = _App

    __APP.all("*", async (req, res, next) => {
        let Route  =  req.originalUrl.split("/")[1]
        if(Route == 'favicon.ico') return
        let Router = await import(`../Routes/${Route}/${Route}.controller`)
        await Router[`${Route}`](req, res)
        next()
    })
}


export const GET    = (route: string, callback: any) => __APP.get(route,    async (_Request, _Response) => _Response.send( JSON.stringify( await callback(_Request,_Response) ) ) )

export const POST   = (route: string, callback: any) => __APP.post(route,   async (_Request, _Response) => _Response.send( JSON.stringify( await callback(_Request,_Response) ) ) )

export const PUT    = (route: string, callback: any) => __APP.put(route,    async (_Request, _Response) => _Response.send( JSON.stringify( await callback(_Request,_Response) ) ) )

export const DELETE = (route: string, callback: any) => __APP.delete(route, async (_Request, _Response) => _Response.send( JSON.stringify( await callback(_Request,_Response) ) ) )