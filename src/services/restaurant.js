import request, { methods } from '@/utils/request_cms';

const router = 'restaurants';

export async function query(params = {}) {
  return request(`/${router}`, { params });
}

export async function queryTree(params = {}) {
  return request(`/${router}.tree`, { params });
}

export async function get(id, params = {}) {
  return request(`/${router}/${id}`, { params });
}

export async function create(data) {
  return request(`/${router}`, {
    method: methods.POST,
    data,
  });
}

export async function update(id, data) {
  return request(`/${router}/${id}`, {
    method: methods.PUT,
    data,
  });
}

export async function del(id, params = {}) {
  return request(`/${router}/${id}`, {
    method: methods.DELETE,
    params,
  });
}

export async function enable(id, params = {}) {
  return request(`/${router}/${id}/enable`, {
    method: methods.PATCH,
    params,
  });
}

export async function disable(id, params = {}) {
  return request(`/${router}/${id}/disable`, {
    method: methods.PATCH,
    params,
  });
}
