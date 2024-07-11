# tic-tac-toe

- 3 main concepts: components, props, states

- components : 2 types
    - class component
    - function component -- ถ้าไม่ได้ใช้ state ควรใช้ function component จะได้ดูง่ายๆ
- render : ทำการ return react elements
- props
    - this.props.value (line 13) กับ value (line 19) คือตัวเดียวกัน โดย props นั้น read only, cannot edit
    - onClick is also props
- {() => {}} เรียกว่า arrow function

- state
    - ข้อดีคือมี function setState() สามารถเปลี่ยนค่าได้ ไม่เหมือน props ที่ read-only
    - lifting state up ???



- ternary operator