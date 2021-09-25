# 회고

```
테스트 구조와 방법, 그리고 목적에 대해 할 수 있었으며, 직접 테스트를 진행하면서 유닛테스트, 통합테스트에 대해
단순 용어가 아니라 정의에 대해 명확하게 알게 되는 계기가 되었다.
뿐만 아니라 렌더링 된 컴포넌트의 접근 순위, 쿼리 메서드의 종류에 대해서 정리 하면서 명확히 이해 할 수 있었다.
테스트 진행 시 가장 힘들었던 axios 모킹을 해결하고 보니, 모킹에 대한 이해가 더 명확해졌다.
```

# Setup

```
npm i -D @testing-library/react
```

cra 를 통해 자동으로 설치되며, 수동 설치 할 수 있다.

# Test Structure

```
Render component to test
Find elements to interact with
Interact with those elements
Assert that the results are as expected
```

# 테스트 코드의 목적

```
Catch Bugs
Increases confidence in application
Speeds up QA time
Can serve as documentations
```

# 테스트 종류

```
Unit  Tests
Integration Tests
End to End Tests ( E2E )
```

# Query Methods

![스크린샷](https://user-images.githubusercontent.com/40695665/134776269-bb0e6fc8-e2b8-4820-9a10-5b0cd89e3c27.png)

각 쿼리 메서드의 리턴 상태를 나타내며, 상황에 맞는 쿼리메서드를 사용하여 테스트 할 수 있다.

# Priority

![alt text](https://user-images.githubusercontent.com/40695665/134767397-519c50eb-4acf-4cf6-89e0-a039ff2b89db.png)
렌더링 된 컴포넌트 접근시, 항상 접근이 가능한 요소부터 찾아 테스트 하며, 불가능 할경우 시멕틴 메서드를 접근하고, 끝으로 TestId 를 지정하여 접근 할 수 있다.

# Describe Block

![스크린샷 2021-09-26 오전 12 14 00](https://user-images.githubusercontent.com/40695665/134776412-260d7459-2181-4ab0-9eb9-b3cfea863b3b.png)

# Fire Event

```
it("should be able to type in input", async () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
  // Event 발생
  fireEvent.change(inputElement, {
    target: { value: "Go Grocery Shopping" },
  });
  expect(inputElement.value).toBe("Go Grocery Shopping");
});
```

fireEvent 객체의 chagne 메서드를 통해 컴포넌트를 지정 후, 이벤트를 발생시켜 사용자가 작동시킬 것과 같은 효과를 내어 테스트를 진행 해 볼 수 있다.

# Integration Tests - Todo.test.js

```
function Todo() {
  const [todos, setTodos] = useState([])
  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput
          setTodos={setTodos}
          todos={todos}
      />
      <TodoList
          todos={todos}
          setTodos={setTodos}
      />
    </div>
  )
}
```

Todo 컴포넌트는 AddInput 컴포넌트와 TodoList 컴포넌트를 자식으로 가지고 있으며, 자식 컴포넌트의 동작을 통해 Todo 컴포넌트를 테스트 하게 된다. 컴포넌트들간 유기적인 작동을 테스트를 Integration Tests 라고 한다.

# Axios mocks & async await

```
export default {
  get: jest.fn().mockResolvedValue(),
};
```

\_\_mocks\_\_ 폴더안에 axios.js 파일 생성 후 우와 같이 모킹을 해준다. get 요청에 대해 모킹 할 수 있으며,

```
import mockedAxios from "axios";

// given
const list = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "ThePhomGOAT",
        },
      },
    ],
  },
};
mockedAxios.get.mockResolvedValueOnce(list);
```

사용할 테스트 파일 내에서 mockedAxios 를 import 후, mockResolvedValueOnce()를 통해 Resolved 값을 전달 받으면 된다. 비동기 통신이기 떄문에 async await 를 사용 하여야 한다.

axios 를 목킹 하는 이유는, 매번 테스트 시 마다 실제 api를 호출 할 경우, 비용이 발생하며, 테스트가 많아 질 경우, 시간도 많이 소요 된다. 테스트가 외부 데이터에 의존적이게 되며, 테스트 시 문제가 발생할 수 있다.
