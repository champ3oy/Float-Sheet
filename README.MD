# Float Sheet
Use beautiful floating modal sheet in your application

Usable with Expo with no extra native dependencies!


## Installation

Open a Terminal in the project root and run:

```sh
yarn add react-native-float-sheet
```

Or if you use npm:

```sh
npm install react-native-float-sheet
```

## Usage

```javascript
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FloastSheet from 'react-native-float-sheet';

export default function App() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const [openSheet, setOpenSheet] = React.useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Float Sheet"
          onPress={() => setOpenSheet(true)}
        />
      </View>
      <FloatSheet
        open={openSheet}
      >
        {renderContent}
      </FloatSheet>
    </>
  );
}
```

## Todo

It's not finished and some work has to be done yet.

1. Add more animations
2. More customization