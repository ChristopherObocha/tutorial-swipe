import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Button,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import { RichText, Toolbar, useEditorBridge } from '@10play/tentap-editor';
import NoteEditor from '@/components/NoteEditor';

const initialContent = {
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "This is a basic "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "a boy!"
        }
      ]
    }
  ]
}

export default function TestScreen() {
  const [isEditorReady, setEditorReady] = useState(false);
  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    // initialContent: `<p>This is a basic example!</p>`,
    initialContent: initialContent,
  });

  useEffect(() => {
    // Check if editor is ready
    const checkEditorReady = async () => {
      const ready = await editor.getEditorState();
      setEditorReady(true);
    };
    
    checkEditorReady();
  }, [editor]);

  const handleSave = async () => {
    if (isEditorReady) {
      console.log('print', editor.getEditorState());
      const text = await editor.getJSON();
      console.log('print', JSON.stringify(text, null, 2));
    } else {
      Alert.alert('Editor is not ready yet!');
    }
  };

  return (
    <ScrollView style={exampleStyles.fullScreen} showsVerticalScrollIndicator={false}>
      {/* <NoteEditor /> */}

      <SafeAreaView style={exampleStyles.editorView}>
      <RichText editor={editor} /> 
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={exampleStyles.keyboardAvoidingView}
      >
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </SafeAreaView>

      <View style={{ height: 20 }} />
      <Button onPress={handleSave} title='Save' color={'red'}/>
    </ScrollView>
  );
};

const exampleStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'grey'
  },
  keyboardAvoidingView: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  editorView: {
    flex: 1,
    marginHorizontal: 15,
    height: 200
  },
});