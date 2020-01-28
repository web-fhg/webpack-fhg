/**
 * 得到所有的省份
 */
export async function getProvinces() {
    return await fetch("/api/local").then(resq => resq.json());
}

/**
 * 根据省份id得到所有的城市
 */
export async function getCitys(parentId) {
    return await fetch(`/api/local?parentId=${parentId}`).then(resq => resq.json());
}
