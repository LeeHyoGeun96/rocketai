/**
 * 템플릿 문자열 내의 플레이스홀더를 변수 값으로 치환하는 함수입니다.
 *
 * - 템플릿 내에서 `{{변수명}}` 형식의 플레이스홀더를 찾아,
 *   전달받은 변수 객체에서 해당 키에 매칭되는 값으로 교체합니다.
 * - 변수 객체에 키가 존재하지 않으면 런타임에서 에러를 발생시켜
 *   누락된 변수명을 빠르게 발견할 수 있도록 돕습니다.
 * - 값이 `undefined`거나 `null`일 경우 빈 문자열로 치환됩니다.
 *
 * @param template 치환할 플레이스홀더가 포함된 템플릿 문자열
 * @param variables 템플릿에 치환할 변수들이 담긴 객체 (예: { name: "로켓" })
 * @returns 플레이스홀더가 실제 값으로 치환된 문자열
 *
 * @throws 변수명이 `variables` 객체에 없으면 Error를 던집니다.
 *
 * @example
 * const template = "안녕하세요, {{name}}님! 생년월일은 {{birth}}입니다.";
 * const vars = { name: "로켓", birth: "1980-08-27" };
 * const result = applyTemplate(template, vars);
 * // 결과: "안녕하세요, 로켓님! 생년월일은 1980-08-27입니다."
 */
type TemplateVariables = {
  name?: string;
  birth?: string;
  birthYear?: string;
  birthMonth?: string;
  birthDay?: string;
  birthTime?: string;
  // 필요한 변수들을 추가로 정의하세요
};

export default function applyTemplate(
  template: string,
  variables: TemplateVariables
): string {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    if (!(key in variables)) {
      throw new Error(`Missing template variable: ${key}`);
    }
    // null 또는 undefined면 빈 문자열로 처리
    const value = variables[key as keyof TemplateVariables];
    return value == null ? "" : String(value);
  });
}
