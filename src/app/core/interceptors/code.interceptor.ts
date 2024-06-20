import { HttpInterceptorFn } from '@angular/common/http';

export const codeInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = "3189301b99983da81c132bf8dca3e1bd";
  const request = req.clone({
    headers : req.headers.set('x-rapidapi-key',apiKey),
  })
  return next(request);
};
