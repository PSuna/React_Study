import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx'

function Examples() {
  // useState는 배열을 반환하며 배열안의 값은 2개이다.
  // selectedTopic : 현재 컴포넌트에 저장된 데이터 값
  // setSelectedTopic : selectedTopic값을 업데이트 하고 함수가 실행될때 해당 컴포넌트 함수가 업데이트됨
  // 컴포넌트 함수 최상단에 위치해야함
  // const 사용이 가능한 이유 : 컴포넌트가 재실행 되면서 변수가 새로 생성이 되므로
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please click a button</p>;

  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>;
  }

  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);

    // 컴포넌트가 재실행 된후에 업데이트된 값을 사용할수있다.
    // console.log(selectedTopic);

  }

  return (
    /* 전달 속성 패턴(대리 속성) 사용 */
    <Section id="examples" title="Examples">
      <Tabs 
        buttons={
          <>
            <TabButton isSelected={selectedTopic == 'components'} onClick={() => { handleSelect('components') }}>Compoents</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onClick={() => { handleSelect('jsx') }}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onClick={() => { handleSelect('props') }}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onClick={() => { handleSelect('state') }}>State</TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
