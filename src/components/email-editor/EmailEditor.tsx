import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import styles from './EmailEditor.module.scss';
import { useState } from 'react';

export function EmailEditor() {
  const [text, useText] =
    useState(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti omnis consequuntur,
          adipisci commodi placeat praesentium molestiae totam neque illum labore incidunt
          exercitationem, eaque nesciunt laboriosam consequatur iste. Facere, dolorum amet!`);

  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <div contentEditable className={styles.editor} spellCheck='false'>
          {text}
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button>
              <Eraser size={17} />
            </button>
            <button>
              <Bold size={17} />
            </button>
            <button>
              <Italic size={17} />
            </button>
            <button>
              <Underline size={17} />
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  );
}
