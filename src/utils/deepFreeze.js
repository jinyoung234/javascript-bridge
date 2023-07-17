/**
 * 인자로 받은 객체를 딥 프리징 하기 위한 유틸 함수
 * @param {object} obj - 딥 프리징 하기 위한 객체
 * @returns {object} 딥 프리징 된 객체 반환
 */
function deepFreeze(obj) {
  const tmpObj = { ...obj };
  const propNames = Object.getOwnPropertyNames(tmpObj);
  propNames.forEach((name) => {
    const value = tmpObj[name];
    return value && (typeof value === 'object' ? deepFreeze(value) : value);
  });
  return Object.freeze(tmpObj);
}

module.exports = deepFreeze;
