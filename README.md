
# React <Logical.Components/>
[Use Gitter for tips and more](https://gitter.im/react-logical-components/Lobby)
React <Logical.Components/> is a library of components designed to improve the visual quality and ease of applying logic operations, iterations etc. in React JSx.

The way we currently use the if condition for an element
```jsx
    {condition && <Element />}
```
See how React <Logical.Components/> simplifies it
```jsx
    <ShowIf value={true}>
         <Element />
    </ShowIf>
```

[See HistoryBook Examples](https://luciancaetano.github.io/react-logical-components/index.html)

# How to use 🧐

    yarn add react-logical-components
or

    npm install --save react-logical-components

## ShowIf 😜
This component will only render children elements if the value attribute is true, see an example usage
```jsx
    <ShowIf value={this.state.hello == 'hello'}>
    	<input type="text" value="Hello World"/>
    </ShowIf>
```
## HideIf 😲
This component will not render children elements if the value attribute is true, see an example usage
```jsx
    <HideIf value={this.state.hello == 'hello'}>
    	<input type="text" value="Hello World"/>
    </HideIf>
```
## Switch, SwitchCase , SwitchDefault 🤗
This component already implements the much-used switch, see an example usage
```jsx
    <Switch value={gender}>
    	<SwitchCase value={'male'}>
            Mr.
    	</SwitchCase>
    	<SwitchCase value={'female'}>
            Mrs.
    	</SwitchCase>
        <SwitchDefault>
            Unknown
        </SwitchDefault>
    </Switch>
```
## Each, EmptyCollection 🤩
This component makes an interaction on a vector or an object using Object.keys, see an example usage.
Use `<EmptyCollection/>` to render a default content when collection is empty.
```jsx
    <Each collection={[1, 2, 3]}>
        { (item, index) => <li key={index}>{item}</li>}
        <EmptyCollection> Nothing found </EmptyCollection>
    </Each>
```
## globalRegister
If you are tired of importing these components every time you use them, to solve this bother we have the globalRegister function, see its use.

In your index.js of your project.
```jsx
import {globalRegister} from 'react-logical-components'
globalRegister ();
```

Or you can tell which components will not be registered.
```jsx
globalRegister ({foreach: false});
```
The following properties are accepted in the parameter.
```jsx
interface IGlobalRegisterOptions {
     foreach: boolean;
     foreachEmpty: boolean;
     hideIF: boolean;
     showIF: boolean;
     switch: boolean;
     switchCase: boolean;
     switchDefault: boolean;
}
```
## More coming 😎
I started this project on January 24, 2018, so I am working to implement and test these components, I am also working on new concepts of components, ah also I accept ideas.

Thanks for being interested in my little project: D
