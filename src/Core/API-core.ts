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


export const GET    = (route: string, result: any) => __APP.get(route,    (_Request, _Response) => _Response.send(JSON.stringify(result)) )

export const POST   = (route: string, result: any) => __APP.post(route,   (_Request, _Response) => _Response.send(JSON.stringify(result)) )

export const PUT    = (route: string, result: any) => __APP.put(route,    (_Request, _Response) => _Response.send(JSON.stringify(result)) )

export const DELETE = (route: string, result: any) => __APP.delete(route, (_Request, _Response) => _Response.send(JSON.stringify(result)) )