export function checkResponse(res: any) {
  if (res.status === 200) {
    return res.response === 'OK' ? res.response : JSON.parse(res.response);
  }
  return Promise.reject({ ...JSON.parse(res.response) });
}

export function checkResponseWithErrorStatus(res: any) {
  if (res.status === 200) {
    return res.response === 'OK' ? res.response : JSON.parse(res.response);
  }
  return Promise.reject(res.status.toString());
}
