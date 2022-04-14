// Generated from d:\Documets\Projects\test\simplerlang.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class simplerlangParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, ID=29, NUM=30, WS=31;
	public static final int
		RULE_prog = 0, RULE_statement_list = 1, RULE_statement = 2, RULE_var_declaration = 3, 
		RULE_create_command = 4, RULE_transform_command = 5, RULE_transform_function = 6, 
		RULE_transform_matrix_declaration = 7, RULE_transform_command_list = 8, 
		RULE_apply_texture_command = 9, RULE_apply_transform_command = 10, RULE_object_props = 11, 
		RULE_object_prop = 12, RULE_prop_name = 13, RULE_object_type = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "statement_list", "statement", "var_declaration", "create_command", 
			"transform_command", "transform_function", "transform_matrix_declaration", 
			"transform_command_list", "apply_texture_command", "apply_transform_command", 
			"object_props", "object_prop", "prop_name", "object_type"
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

	@Override
	public String getGrammarFileName() { return "simplerlang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public simplerlangParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(simplerlangParser.EOF, 0); }
		public List<Statement_listContext> statement_list() {
			return getRuleContexts(Statement_listContext.class);
		}
		public Statement_listContext statement_list(int i) {
			return getRuleContext(Statement_listContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(30);
				statement_list();
				}
				}
				setState(33); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__2) | (1L << T__3) | (1L << T__16) | (1L << T__17) | (1L << T__19))) != 0) );
			setState(35);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Statement_listContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Statement_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement_list; }
	}

	public final Statement_listContext statement_list() throws RecognitionException {
		Statement_listContext _localctx = new Statement_listContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement_list);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(38); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(37);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(40); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public Var_declarationContext var_declaration() {
			return getRuleContext(Var_declarationContext.class,0);
		}
		public Transform_matrix_declarationContext transform_matrix_declaration() {
			return getRuleContext(Transform_matrix_declarationContext.class,0);
		}
		public Apply_texture_commandContext apply_texture_command() {
			return getRuleContext(Apply_texture_commandContext.class,0);
		}
		public Apply_transform_commandContext apply_transform_command() {
			return getRuleContext(Apply_transform_commandContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(46);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__2:
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				var_declaration();
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				transform_matrix_declaration();
				}
				break;
			case T__17:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				apply_texture_command();
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 4);
				{
				setState(45);
				apply_transform_command();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_declarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(simplerlangParser.ID, 0); }
		public Create_commandContext create_command() {
			return getRuleContext(Create_commandContext.class,0);
		}
		public TerminalNode NUM() { return getToken(simplerlangParser.NUM, 0); }
		public Var_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_declaration; }
	}

	public final Var_declarationContext var_declaration() throws RecognitionException {
		Var_declarationContext _localctx = new Var_declarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_var_declaration);
		try {
			setState(60);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				match(T__0);
				setState(49);
				match(ID);
				setState(50);
				match(T__1);
				setState(51);
				create_command();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				match(T__2);
				setState(53);
				match(ID);
				setState(54);
				match(T__1);
				setState(55);
				match(NUM);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 3);
				{
				setState(56);
				match(T__3);
				setState(57);
				match(ID);
				setState(58);
				match(T__1);
				setState(59);
				create_command();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Create_commandContext extends ParserRuleContext {
		public Object_typeContext object_type() {
			return getRuleContext(Object_typeContext.class,0);
		}
		public Object_propsContext object_props() {
			return getRuleContext(Object_propsContext.class,0);
		}
		public Create_commandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_create_command; }
	}

	public final Create_commandContext create_command() throws RecognitionException {
		Create_commandContext _localctx = new Create_commandContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_create_command);
		try {
			setState(70);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(62);
				match(T__4);
				setState(63);
				object_type();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(64);
				match(T__4);
				setState(65);
				object_type();
				setState(66);
				match(T__5);
				setState(67);
				object_props();
				setState(68);
				match(T__6);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Transform_commandContext extends ParserRuleContext {
		public Transform_functionContext transform_function() {
			return getRuleContext(Transform_functionContext.class,0);
		}
		public TerminalNode ID() { return getToken(simplerlangParser.ID, 0); }
		public TerminalNode NUM() { return getToken(simplerlangParser.NUM, 0); }
		public Transform_commandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transform_command; }
	}

	public final Transform_commandContext transform_command() throws RecognitionException {
		Transform_commandContext _localctx = new Transform_commandContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_transform_command);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			transform_function();
			setState(73);
			match(T__7);
			setState(74);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUM) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(75);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Transform_functionContext extends ParserRuleContext {
		public Transform_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transform_function; }
	}

	public final Transform_functionContext transform_function() throws RecognitionException {
		Transform_functionContext _localctx = new Transform_functionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_transform_function);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Transform_matrix_declarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(simplerlangParser.ID, 0); }
		public Transform_command_listContext transform_command_list() {
			return getRuleContext(Transform_command_listContext.class,0);
		}
		public Transform_matrix_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transform_matrix_declaration; }
	}

	public final Transform_matrix_declarationContext transform_matrix_declaration() throws RecognitionException {
		Transform_matrix_declarationContext _localctx = new Transform_matrix_declarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_transform_matrix_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(T__16);
			setState(80);
			match(ID);
			setState(81);
			match(T__5);
			setState(82);
			transform_command_list();
			setState(83);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Transform_command_listContext extends ParserRuleContext {
		public List<Transform_commandContext> transform_command() {
			return getRuleContexts(Transform_commandContext.class);
		}
		public Transform_commandContext transform_command(int i) {
			return getRuleContext(Transform_commandContext.class,i);
		}
		public Transform_command_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transform_command_list; }
	}

	public final Transform_command_listContext transform_command_list() throws RecognitionException {
		Transform_command_listContext _localctx = new Transform_command_listContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_transform_command_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(85);
				transform_command();
				}
				}
				setState(88); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Apply_texture_commandContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(simplerlangParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(simplerlangParser.ID, i);
		}
		public Apply_texture_commandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_apply_texture_command; }
	}

	public final Apply_texture_commandContext apply_texture_command() throws RecognitionException {
		Apply_texture_commandContext _localctx = new Apply_texture_commandContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_apply_texture_command);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(T__17);
			setState(91);
			match(T__7);
			setState(92);
			match(ID);
			setState(93);
			match(T__18);
			setState(94);
			match(ID);
			setState(95);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Apply_transform_commandContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(simplerlangParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(simplerlangParser.ID, i);
		}
		public Apply_transform_commandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_apply_transform_command; }
	}

	public final Apply_transform_commandContext apply_transform_command() throws RecognitionException {
		Apply_transform_commandContext _localctx = new Apply_transform_commandContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_apply_transform_command);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__19);
			setState(98);
			match(T__7);
			setState(99);
			match(ID);
			setState(100);
			match(T__18);
			setState(101);
			match(ID);
			setState(102);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Object_propsContext extends ParserRuleContext {
		public List<Object_propContext> object_prop() {
			return getRuleContexts(Object_propContext.class);
		}
		public Object_propContext object_prop(int i) {
			return getRuleContext(Object_propContext.class,i);
		}
		public Object_propsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_props; }
	}

	public final Object_propsContext object_props() throws RecognitionException {
		Object_propsContext _localctx = new Object_propsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_object_props);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(104);
				object_prop();
				}
				}
				setState(107); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__12) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Object_propContext extends ParserRuleContext {
		public Prop_nameContext prop_name() {
			return getRuleContext(Prop_nameContext.class,0);
		}
		public TerminalNode ID() { return getToken(simplerlangParser.ID, 0); }
		public TerminalNode NUM() { return getToken(simplerlangParser.NUM, 0); }
		public Object_propContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_prop; }
	}

	public final Object_propContext object_prop() throws RecognitionException {
		Object_propContext _localctx = new Object_propContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_object_prop);
		try {
			setState(117);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(109);
				prop_name();
				setState(110);
				match(T__1);
				setState(111);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(113);
				prop_name();
				setState(114);
				match(T__1);
				setState(115);
				match(NUM);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Prop_nameContext extends ParserRuleContext {
		public Prop_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prop_name; }
	}

	public final Prop_nameContext prop_name() throws RecognitionException {
		Prop_nameContext _localctx = new Prop_nameContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_prop_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__12) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Object_typeContext extends ParserRuleContext {
		public Object_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_type; }
	}

	public final Object_typeContext object_type() throws RecognitionException {
		Object_typeContext _localctx = new Object_typeContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_object_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3!~\4\2\t\2\4\3\t\3"+
		"\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f"+
		"\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\6\2\"\n\2\r\2\16\2#\3\2"+
		"\3\2\3\3\6\3)\n\3\r\3\16\3*\3\4\3\4\3\4\3\4\5\4\61\n\4\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5?\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\5\6I\n\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n"+
		"\6\nY\n\n\r\n\16\nZ\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\r\6\rl\n\r\r\r\16\rm\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\5\16x\n\16\3\17\3\17\3\20\3\20\3\20\2\2\21\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36\2\6\3\2\37 \3\2\f\22\4\2\17\17\27\32\3\2\33\36\2y\2"+
		"!\3\2\2\2\4(\3\2\2\2\6\60\3\2\2\2\b>\3\2\2\2\nH\3\2\2\2\fJ\3\2\2\2\16"+
		"O\3\2\2\2\20Q\3\2\2\2\22X\3\2\2\2\24\\\3\2\2\2\26c\3\2\2\2\30k\3\2\2\2"+
		"\32w\3\2\2\2\34y\3\2\2\2\36{\3\2\2\2 \"\5\4\3\2! \3\2\2\2\"#\3\2\2\2#"+
		"!\3\2\2\2#$\3\2\2\2$%\3\2\2\2%&\7\2\2\3&\3\3\2\2\2\')\5\6\4\2(\'\3\2\2"+
		"\2)*\3\2\2\2*(\3\2\2\2*+\3\2\2\2+\5\3\2\2\2,\61\5\b\5\2-\61\5\20\t\2."+
		"\61\5\24\13\2/\61\5\26\f\2\60,\3\2\2\2\60-\3\2\2\2\60.\3\2\2\2\60/\3\2"+
		"\2\2\61\7\3\2\2\2\62\63\7\3\2\2\63\64\7\37\2\2\64\65\7\4\2\2\65?\5\n\6"+
		"\2\66\67\7\5\2\2\678\7\37\2\289\7\4\2\29?\7 \2\2:;\7\6\2\2;<\7\37\2\2"+
		"<=\7\4\2\2=?\5\n\6\2>\62\3\2\2\2>\66\3\2\2\2>:\3\2\2\2?\t\3\2\2\2@A\7"+
		"\7\2\2AI\5\36\20\2BC\7\7\2\2CD\5\36\20\2DE\7\b\2\2EF\5\30\r\2FG\7\t\2"+
		"\2GI\3\2\2\2H@\3\2\2\2HB\3\2\2\2I\13\3\2\2\2JK\5\16\b\2KL\7\n\2\2LM\t"+
		"\2\2\2MN\7\13\2\2N\r\3\2\2\2OP\t\3\2\2P\17\3\2\2\2QR\7\23\2\2RS\7\37\2"+
		"\2ST\7\b\2\2TU\5\22\n\2UV\7\t\2\2V\21\3\2\2\2WY\5\f\7\2XW\3\2\2\2YZ\3"+
		"\2\2\2ZX\3\2\2\2Z[\3\2\2\2[\23\3\2\2\2\\]\7\24\2\2]^\7\n\2\2^_\7\37\2"+
		"\2_`\7\25\2\2`a\7\37\2\2ab\7\13\2\2b\25\3\2\2\2cd\7\26\2\2de\7\n\2\2e"+
		"f\7\37\2\2fg\7\25\2\2gh\7\37\2\2hi\7\13\2\2i\27\3\2\2\2jl\5\32\16\2kj"+
		"\3\2\2\2lm\3\2\2\2mk\3\2\2\2mn\3\2\2\2n\31\3\2\2\2op\5\34\17\2pq\7\4\2"+
		"\2qr\7\37\2\2rx\3\2\2\2st\5\34\17\2tu\7\4\2\2uv\7 \2\2vx\3\2\2\2wo\3\2"+
		"\2\2ws\3\2\2\2x\33\3\2\2\2yz\t\4\2\2z\35\3\2\2\2{|\t\5\2\2|\37\3\2\2\2"+
		"\n#*\60>HZmw";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}