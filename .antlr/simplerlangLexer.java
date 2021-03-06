// Generated from d:\Documets\Projects\antlr\simplerlang.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class simplerlangLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, ID=29, NUM=30, WS=31;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
			"T__25", "T__26", "T__27", "ID", "NUM", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Object'", "'='", "'Number'", "'Texture'", "'Create'", "'{'", 
			"'}'", "'('", "')'", "'TranslateX'", "'TranslateY'", "'TranslateZ'", 
			"'Scale'", "'RotateX'", "'RotateY'", "'RotateZ'", "'matrix'", "'ApplyTexture'", 
			"','", "'Transform'", "'X'", "'Y'", "'Z'", "'Radius'", "'Triangle'", 
			"'Cube'", "'Sphere'", "'Pyramid'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "ID", "NUM", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public simplerlangLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "simplerlang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2!\u010c\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\t"+
		"\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\27\3\27\3\30"+
		"\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\7\36\u00f4\n\36"+
		"\f\36\16\36\u00f7\13\36\3\37\3\37\5\37\u00fb\n\37\3\37\3\37\7\37\u00ff"+
		"\n\37\f\37\16\37\u0102\13\37\5\37\u0104\n\37\3 \6 \u0107\n \r \16 \u0108"+
		"\3 \3 \2\2!\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!\3\2\7\3\2c|\6\2\62;C\\aac|\3\2\63;\3\2\62;\4\2\13\f\""+
		"\"\2\u0110\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\3A\3\2\2\2\5H\3\2\2\2\7J\3\2\2\2"+
		"\tQ\3\2\2\2\13Y\3\2\2\2\r`\3\2\2\2\17b\3\2\2\2\21d\3\2\2\2\23f\3\2\2\2"+
		"\25h\3\2\2\2\27s\3\2\2\2\31~\3\2\2\2\33\u0089\3\2\2\2\35\u008f\3\2\2\2"+
		"\37\u0097\3\2\2\2!\u009f\3\2\2\2#\u00a7\3\2\2\2%\u00ae\3\2\2\2\'\u00bb"+
		"\3\2\2\2)\u00bd\3\2\2\2+\u00c7\3\2\2\2-\u00c9\3\2\2\2/\u00cb\3\2\2\2\61"+
		"\u00cd\3\2\2\2\63\u00d4\3\2\2\2\65\u00dd\3\2\2\2\67\u00e2\3\2\2\29\u00e9"+
		"\3\2\2\2;\u00f1\3\2\2\2=\u0103\3\2\2\2?\u0106\3\2\2\2AB\7Q\2\2BC\7d\2"+
		"\2CD\7l\2\2DE\7g\2\2EF\7e\2\2FG\7v\2\2G\4\3\2\2\2HI\7?\2\2I\6\3\2\2\2"+
		"JK\7P\2\2KL\7w\2\2LM\7o\2\2MN\7d\2\2NO\7g\2\2OP\7t\2\2P\b\3\2\2\2QR\7"+
		"V\2\2RS\7g\2\2ST\7z\2\2TU\7v\2\2UV\7w\2\2VW\7t\2\2WX\7g\2\2X\n\3\2\2\2"+
		"YZ\7E\2\2Z[\7t\2\2[\\\7g\2\2\\]\7c\2\2]^\7v\2\2^_\7g\2\2_\f\3\2\2\2`a"+
		"\7}\2\2a\16\3\2\2\2bc\7\177\2\2c\20\3\2\2\2de\7*\2\2e\22\3\2\2\2fg\7+"+
		"\2\2g\24\3\2\2\2hi\7V\2\2ij\7t\2\2jk\7c\2\2kl\7p\2\2lm\7u\2\2mn\7n\2\2"+
		"no\7c\2\2op\7v\2\2pq\7g\2\2qr\7Z\2\2r\26\3\2\2\2st\7V\2\2tu\7t\2\2uv\7"+
		"c\2\2vw\7p\2\2wx\7u\2\2xy\7n\2\2yz\7c\2\2z{\7v\2\2{|\7g\2\2|}\7[\2\2}"+
		"\30\3\2\2\2~\177\7V\2\2\177\u0080\7t\2\2\u0080\u0081\7c\2\2\u0081\u0082"+
		"\7p\2\2\u0082\u0083\7u\2\2\u0083\u0084\7n\2\2\u0084\u0085\7c\2\2\u0085"+
		"\u0086\7v\2\2\u0086\u0087\7g\2\2\u0087\u0088\7\\\2\2\u0088\32\3\2\2\2"+
		"\u0089\u008a\7U\2\2\u008a\u008b\7e\2\2\u008b\u008c\7c\2\2\u008c\u008d"+
		"\7n\2\2\u008d\u008e\7g\2\2\u008e\34\3\2\2\2\u008f\u0090\7T\2\2\u0090\u0091"+
		"\7q\2\2\u0091\u0092\7v\2\2\u0092\u0093\7c\2\2\u0093\u0094\7v\2\2\u0094"+
		"\u0095\7g\2\2\u0095\u0096\7Z\2\2\u0096\36\3\2\2\2\u0097\u0098\7T\2\2\u0098"+
		"\u0099\7q\2\2\u0099\u009a\7v\2\2\u009a\u009b\7c\2\2\u009b\u009c\7v\2\2"+
		"\u009c\u009d\7g\2\2\u009d\u009e\7[\2\2\u009e \3\2\2\2\u009f\u00a0\7T\2"+
		"\2\u00a0\u00a1\7q\2\2\u00a1\u00a2\7v\2\2\u00a2\u00a3\7c\2\2\u00a3\u00a4"+
		"\7v\2\2\u00a4\u00a5\7g\2\2\u00a5\u00a6\7\\\2\2\u00a6\"\3\2\2\2\u00a7\u00a8"+
		"\7o\2\2\u00a8\u00a9\7c\2\2\u00a9\u00aa\7v\2\2\u00aa\u00ab\7t\2\2\u00ab"+
		"\u00ac\7k\2\2\u00ac\u00ad\7z\2\2\u00ad$\3\2\2\2\u00ae\u00af\7C\2\2\u00af"+
		"\u00b0\7r\2\2\u00b0\u00b1\7r\2\2\u00b1\u00b2\7n\2\2\u00b2\u00b3\7{\2\2"+
		"\u00b3\u00b4\7V\2\2\u00b4\u00b5\7g\2\2\u00b5\u00b6\7z\2\2\u00b6\u00b7"+
		"\7v\2\2\u00b7\u00b8\7w\2\2\u00b8\u00b9\7t\2\2\u00b9\u00ba\7g\2\2\u00ba"+
		"&\3\2\2\2\u00bb\u00bc\7.\2\2\u00bc(\3\2\2\2\u00bd\u00be\7V\2\2\u00be\u00bf"+
		"\7t\2\2\u00bf\u00c0\7c\2\2\u00c0\u00c1\7p\2\2\u00c1\u00c2\7u\2\2\u00c2"+
		"\u00c3\7h\2\2\u00c3\u00c4\7q\2\2\u00c4\u00c5\7t\2\2\u00c5\u00c6\7o\2\2"+
		"\u00c6*\3\2\2\2\u00c7\u00c8\7Z\2\2\u00c8,\3\2\2\2\u00c9\u00ca\7[\2\2\u00ca"+
		".\3\2\2\2\u00cb\u00cc\7\\\2\2\u00cc\60\3\2\2\2\u00cd\u00ce\7T\2\2\u00ce"+
		"\u00cf\7c\2\2\u00cf\u00d0\7f\2\2\u00d0\u00d1\7k\2\2\u00d1\u00d2\7w\2\2"+
		"\u00d2\u00d3\7u\2\2\u00d3\62\3\2\2\2\u00d4\u00d5\7V\2\2\u00d5\u00d6\7"+
		"t\2\2\u00d6\u00d7\7k\2\2\u00d7\u00d8\7c\2\2\u00d8\u00d9\7p\2\2\u00d9\u00da"+
		"\7i\2\2\u00da\u00db\7n\2\2\u00db\u00dc\7g\2\2\u00dc\64\3\2\2\2\u00dd\u00de"+
		"\7E\2\2\u00de\u00df\7w\2\2\u00df\u00e0\7d\2\2\u00e0\u00e1\7g\2\2\u00e1"+
		"\66\3\2\2\2\u00e2\u00e3\7U\2\2\u00e3\u00e4\7r\2\2\u00e4\u00e5\7j\2\2\u00e5"+
		"\u00e6\7g\2\2\u00e6\u00e7\7t\2\2\u00e7\u00e8\7g\2\2\u00e88\3\2\2\2\u00e9"+
		"\u00ea\7R\2\2\u00ea\u00eb\7{\2\2\u00eb\u00ec\7t\2\2\u00ec\u00ed\7c\2\2"+
		"\u00ed\u00ee\7o\2\2\u00ee\u00ef\7k\2\2\u00ef\u00f0\7f\2\2\u00f0:\3\2\2"+
		"\2\u00f1\u00f5\t\2\2\2\u00f2\u00f4\t\3\2\2\u00f3\u00f2\3\2\2\2\u00f4\u00f7"+
		"\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6<\3\2\2\2\u00f7"+
		"\u00f5\3\2\2\2\u00f8\u0104\7\62\2\2\u00f9\u00fb\7/\2\2\u00fa\u00f9\3\2"+
		"\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u0100\t\4\2\2\u00fd"+
		"\u00ff\t\5\2\2\u00fe\u00fd\3\2\2\2\u00ff\u0102\3\2\2\2\u0100\u00fe\3\2"+
		"\2\2\u0100\u0101\3\2\2\2\u0101\u0104\3\2\2\2\u0102\u0100\3\2\2\2\u0103"+
		"\u00f8\3\2\2\2\u0103\u00fa\3\2\2\2\u0104>\3\2\2\2\u0105\u0107\t\6\2\2"+
		"\u0106\u0105\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u0106\3\2\2\2\u0108\u0109"+
		"\3\2\2\2\u0109\u010a\3\2\2\2\u010a\u010b\b \2\2\u010b@\3\2\2\2\b\2\u00f5"+
		"\u00fa\u0100\u0103\u0108\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}