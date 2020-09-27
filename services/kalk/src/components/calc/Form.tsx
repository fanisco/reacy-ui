import React, {useState} from 'react';
import {Forms, Buttons} from 'reacy-ui';

export const Form: React.FC<any> = ({data, onSubmit}) => {
  const [localData, setLocalData] = useState(data);
  return (
    <Forms.Form
      wrap={true}
      data={localData}
      groups={[
        {name: 'appearance', title: 'Отображение'},
        {name: 'dimensions', title: 'Размеры'}
      ]}
      fields={[
        {
          name: 'units', type: 'select', title: 'Единицы измерения', group: 'appearance',
          items: [{id: 'cm', caption: 'см'}, {id: 'dm', caption: 'дм'}, {id: 'm', caption: 'м'}]
        },
        {
          name: 'color', type: 'select', title: 'Чертёж', group: 'appearance',
          items: [{id: 'cl', caption: 'цветной'}, {id: 'bw', caption: 'черно-белый'}]
        },
        {name: 'width', type: 'string', title: 'Ширина', group: 'dimensions'},
        {name: 'depth', type: 'string', title: 'Глубина', group: 'dimensions'}
      ]}
      onSubmit={() => onSubmit(localData)}
      onChange={(name, value) => setLocalData({...localData, [name]: value})}
      buttons={[<Buttons.Button key="apply" mods={['primary']}>Расчитать</Buttons.Button>]}
    />
  );
};
