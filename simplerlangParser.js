// Generated from simplerlang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import simplerlangListener from './simplerlangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003%\u0086\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0006\u0002$\n\u0002\r\u0002\u000e",
    "\u0002%\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003+\n\u0003\r\u0003",
    "\u000e\u0003,\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u00043\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005A\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006K\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0006\n[\n\n\r\n\u000e\n\\\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0006\rn\n\r\r\r",
    "\u000e\ro\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e~\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0002\u0002\u0012\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \u0002\u0007\u0003\u0002#$\u0003\u0002\f\u0012\u0004\u0002\u000f\u000f",
    "\u0017\u001b\u0003\u0002\u001c\u001e\u0003\u0002\u001f\"\u0002\u0081",
    "\u0002#\u0003\u0002\u0002\u0002\u0004*\u0003\u0002\u0002\u0002\u0006",
    "2\u0003\u0002\u0002\u0002\b@\u0003\u0002\u0002\u0002\nJ\u0003\u0002",
    "\u0002\u0002\fL\u0003\u0002\u0002\u0002\u000eQ\u0003\u0002\u0002\u0002",
    "\u0010S\u0003\u0002\u0002\u0002\u0012Z\u0003\u0002\u0002\u0002\u0014",
    "^\u0003\u0002\u0002\u0002\u0016e\u0003\u0002\u0002\u0002\u0018m\u0003",
    "\u0002\u0002\u0002\u001a}\u0003\u0002\u0002\u0002\u001c\u007f\u0003",
    "\u0002\u0002\u0002\u001e\u0081\u0003\u0002\u0002\u0002 \u0083\u0003",
    "\u0002\u0002\u0002\"$\u0005\u0004\u0003\u0002#\"\u0003\u0002\u0002\u0002",
    "$%\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\'(\u0007\u0002\u0002\u0003(\u0003",
    "\u0003\u0002\u0002\u0002)+\u0005\u0006\u0004\u0002*)\u0003\u0002\u0002",
    "\u0002+,\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002",
    "\u0002\u0002-\u0005\u0003\u0002\u0002\u0002.3\u0005\b\u0005\u0002/3",
    "\u0005\u0010\t\u000203\u0005\u0014\u000b\u000213\u0005\u0016\f\u0002",
    "2.\u0003\u0002\u0002\u00022/\u0003\u0002\u0002\u000220\u0003\u0002\u0002",
    "\u000221\u0003\u0002\u0002\u00023\u0007\u0003\u0002\u0002\u000245\u0007",
    "\u0003\u0002\u000256\u0007#\u0002\u000267\u0007\u0004\u0002\u00027A",
    "\u0005\n\u0006\u000289\u0007\u0005\u0002\u00029:\u0007#\u0002\u0002",
    ":;\u0007\u0004\u0002\u0002;A\u0007$\u0002\u0002<=\u0007\u0006\u0002",
    "\u0002=>\u0007#\u0002\u0002>?\u0007\u0004\u0002\u0002?A\u0005\n\u0006",
    "\u0002@4\u0003\u0002\u0002\u0002@8\u0003\u0002\u0002\u0002@<\u0003\u0002",
    "\u0002\u0002A\t\u0003\u0002\u0002\u0002BC\u0007\u0007\u0002\u0002CK",
    "\u0005 \u0011\u0002DE\u0007\u0007\u0002\u0002EF\u0005 \u0011\u0002F",
    "G\u0007\b\u0002\u0002GH\u0005\u0018\r\u0002HI\u0007\t\u0002\u0002IK",
    "\u0003\u0002\u0002\u0002JB\u0003\u0002\u0002\u0002JD\u0003\u0002\u0002",
    "\u0002K\u000b\u0003\u0002\u0002\u0002LM\u0005\u000e\b\u0002MN\u0007",
    "\n\u0002\u0002NO\t\u0002\u0002\u0002OP\u0007\u000b\u0002\u0002P\r\u0003",
    "\u0002\u0002\u0002QR\t\u0003\u0002\u0002R\u000f\u0003\u0002\u0002\u0002",
    "ST\u0007\u0013\u0002\u0002TU\u0007#\u0002\u0002UV\u0007\b\u0002\u0002",
    "VW\u0005\u0012\n\u0002WX\u0007\t\u0002\u0002X\u0011\u0003\u0002\u0002",
    "\u0002Y[\u0005\f\u0007\u0002ZY\u0003\u0002\u0002\u0002[\\\u0003\u0002",
    "\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]",
    "\u0013\u0003\u0002\u0002\u0002^_\u0007\u0014\u0002\u0002_`\u0007\n\u0002",
    "\u0002`a\u0007#\u0002\u0002ab\u0007\u0015\u0002\u0002bc\u0007#\u0002",
    "\u0002cd\u0007\u000b\u0002\u0002d\u0015\u0003\u0002\u0002\u0002ef\u0007",
    "\u0016\u0002\u0002fg\u0007\n\u0002\u0002gh\u0007#\u0002\u0002hi\u0007",
    "\u0015\u0002\u0002ij\u0007#\u0002\u0002jk\u0007\u000b\u0002\u0002k\u0017",
    "\u0003\u0002\u0002\u0002ln\u0005\u001a\u000e\u0002ml\u0003\u0002\u0002",
    "\u0002no\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002p\u0019\u0003\u0002\u0002\u0002qr\u0005\u001c\u000f\u0002",
    "rs\u0007\u0004\u0002\u0002st\u0007#\u0002\u0002t~\u0003\u0002\u0002",
    "\u0002uv\u0005\u001c\u000f\u0002vw\u0007\u0004\u0002\u0002wx\u0007$",
    "\u0002\u0002x~\u0003\u0002\u0002\u0002yz\u0005\u001c\u000f\u0002z{\u0007",
    "\u0004\u0002\u0002{|\u0005\u001e\u0010\u0002|~\u0003\u0002\u0002\u0002",
    "}q\u0003\u0002\u0002\u0002}u\u0003\u0002\u0002\u0002}y\u0003\u0002\u0002",
    "\u0002~\u001b\u0003\u0002\u0002\u0002\u007f\u0080\t\u0004\u0002\u0002",
    "\u0080\u001d\u0003\u0002\u0002\u0002\u0081\u0082\t\u0005\u0002\u0002",
    "\u0082\u001f\u0003\u0002\u0002\u0002\u0083\u0084\t\u0006\u0002\u0002",
    "\u0084!\u0003\u0002\u0002\u0002\n%,2@J\\o}"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class simplerlangParser extends antlr4.Parser {

    static grammarFileName = "simplerlang.g4";
    static literalNames = [ null, "'Object'", "'='", "'Number'", "'Texture'", 
                            "'Create'", "'{'", "'}'", "'('", "')'", "'TranslateX'", 
                            "'TranslateY'", "'TranslateZ'", "'Scale'", "'RotateX'", 
                            "'RotateY'", "'RotateZ'", "'matrix'", "'ApplyTexture'", 
                            "','", "'Transform'", "'X'", "'Y'", "'Z'", "'Radius'", 
                            "'Color'", "'Red'", "'Blue'", "'Black'", "'Triangle'", 
                            "'Cube'", "'Sphere'", "'Pyramid'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "ID", "NUM", "WS" ];
    static ruleNames = [ "prog", "statement_list", "statement", "var_declaration", 
                         "create_command", "transform_command", "transform_function", 
                         "transform_matrix_declaration", "transform_command_list", 
                         "apply_texture_command", "apply_transform_command", 
                         "object_props", "object_prop", "prop_name", "color_type", 
                         "object_type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = simplerlangParser.ruleNames;
        this.literalNames = simplerlangParser.literalNames;
        this.symbolicNames = simplerlangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, simplerlangParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.statement_list();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << simplerlangParser.T__0) | (1 << simplerlangParser.T__2) | (1 << simplerlangParser.T__3) | (1 << simplerlangParser.T__16) | (1 << simplerlangParser.T__17) | (1 << simplerlangParser.T__19))) !== 0));
	        this.state = 37;
	        this.match(simplerlangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement_list() {
	    let localctx = new Statement_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, simplerlangParser.RULE_statement_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 39;
	        		this.statement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 42; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, simplerlangParser.RULE_statement);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case simplerlangParser.T__0:
	        case simplerlangParser.T__2:
	        case simplerlangParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.var_declaration();
	            break;
	        case simplerlangParser.T__16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.transform_matrix_declaration();
	            break;
	        case simplerlangParser.T__17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.apply_texture_command();
	            break;
	        case simplerlangParser.T__19:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.apply_transform_command();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_declaration() {
	    let localctx = new Var_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, simplerlangParser.RULE_var_declaration);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case simplerlangParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(simplerlangParser.T__0);
	            this.state = 51;
	            this.match(simplerlangParser.ID);
	            this.state = 52;
	            this.match(simplerlangParser.T__1);
	            this.state = 53;
	            this.create_command();
	            break;
	        case simplerlangParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(simplerlangParser.T__2);
	            this.state = 55;
	            this.match(simplerlangParser.ID);
	            this.state = 56;
	            this.match(simplerlangParser.T__1);
	            this.state = 57;
	            this.match(simplerlangParser.NUM);
	            break;
	        case simplerlangParser.T__3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.match(simplerlangParser.T__3);
	            this.state = 59;
	            this.match(simplerlangParser.ID);
	            this.state = 60;
	            this.match(simplerlangParser.T__1);
	            this.state = 61;
	            this.create_command();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	create_command() {
	    let localctx = new Create_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, simplerlangParser.RULE_create_command);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(simplerlangParser.T__4);
	            this.state = 65;
	            this.object_type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(simplerlangParser.T__4);
	            this.state = 67;
	            this.object_type();
	            this.state = 68;
	            this.match(simplerlangParser.T__5);
	            this.state = 69;
	            this.object_props();
	            this.state = 70;
	            this.match(simplerlangParser.T__6);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transform_command() {
	    let localctx = new Transform_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, simplerlangParser.RULE_transform_command);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.transform_function();
	        this.state = 75;
	        this.match(simplerlangParser.T__7);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!(_la===simplerlangParser.ID || _la===simplerlangParser.NUM)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 77;
	        this.match(simplerlangParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transform_function() {
	    let localctx = new Transform_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, simplerlangParser.RULE_transform_function);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << simplerlangParser.T__9) | (1 << simplerlangParser.T__10) | (1 << simplerlangParser.T__11) | (1 << simplerlangParser.T__12) | (1 << simplerlangParser.T__13) | (1 << simplerlangParser.T__14) | (1 << simplerlangParser.T__15))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transform_matrix_declaration() {
	    let localctx = new Transform_matrix_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, simplerlangParser.RULE_transform_matrix_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(simplerlangParser.T__16);
	        this.state = 82;
	        this.match(simplerlangParser.ID);
	        this.state = 83;
	        this.match(simplerlangParser.T__5);
	        this.state = 84;
	        this.transform_command_list();
	        this.state = 85;
	        this.match(simplerlangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transform_command_list() {
	    let localctx = new Transform_command_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, simplerlangParser.RULE_transform_command_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 87;
	            this.transform_command();
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << simplerlangParser.T__9) | (1 << simplerlangParser.T__10) | (1 << simplerlangParser.T__11) | (1 << simplerlangParser.T__12) | (1 << simplerlangParser.T__13) | (1 << simplerlangParser.T__14) | (1 << simplerlangParser.T__15))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	apply_texture_command() {
	    let localctx = new Apply_texture_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, simplerlangParser.RULE_apply_texture_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(simplerlangParser.T__17);
	        this.state = 93;
	        this.match(simplerlangParser.T__7);
	        this.state = 94;
	        this.match(simplerlangParser.ID);
	        this.state = 95;
	        this.match(simplerlangParser.T__18);
	        this.state = 96;
	        this.match(simplerlangParser.ID);
	        this.state = 97;
	        this.match(simplerlangParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	apply_transform_command() {
	    let localctx = new Apply_transform_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, simplerlangParser.RULE_apply_transform_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(simplerlangParser.T__19);
	        this.state = 100;
	        this.match(simplerlangParser.T__7);
	        this.state = 101;
	        this.match(simplerlangParser.ID);
	        this.state = 102;
	        this.match(simplerlangParser.T__18);
	        this.state = 103;
	        this.match(simplerlangParser.ID);
	        this.state = 104;
	        this.match(simplerlangParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object_props() {
	    let localctx = new Object_propsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, simplerlangParser.RULE_object_props);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 106;
	            this.object_prop();
	            this.state = 109; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << simplerlangParser.T__12) | (1 << simplerlangParser.T__20) | (1 << simplerlangParser.T__21) | (1 << simplerlangParser.T__22) | (1 << simplerlangParser.T__23) | (1 << simplerlangParser.T__24))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object_prop() {
	    let localctx = new Object_propContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, simplerlangParser.RULE_object_prop);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.prop_name();
	            this.state = 112;
	            this.match(simplerlangParser.T__1);
	            this.state = 113;
	            this.match(simplerlangParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.prop_name();
	            this.state = 116;
	            this.match(simplerlangParser.T__1);
	            this.state = 117;
	            this.match(simplerlangParser.NUM);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.prop_name();
	            this.state = 120;
	            this.match(simplerlangParser.T__1);
	            this.state = 121;
	            this.color_type();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prop_name() {
	    let localctx = new Prop_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, simplerlangParser.RULE_prop_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << simplerlangParser.T__12) | (1 << simplerlangParser.T__20) | (1 << simplerlangParser.T__21) | (1 << simplerlangParser.T__22) | (1 << simplerlangParser.T__23) | (1 << simplerlangParser.T__24))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	color_type() {
	    let localctx = new Color_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, simplerlangParser.RULE_color_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << simplerlangParser.T__25) | (1 << simplerlangParser.T__26) | (1 << simplerlangParser.T__27))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object_type() {
	    let localctx = new Object_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, simplerlangParser.RULE_object_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        _la = this._input.LA(1);
	        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (simplerlangParser.T__28 - 29)) | (1 << (simplerlangParser.T__29 - 29)) | (1 << (simplerlangParser.T__30 - 29)) | (1 << (simplerlangParser.T__31 - 29)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

simplerlangParser.EOF = antlr4.Token.EOF;
simplerlangParser.T__0 = 1;
simplerlangParser.T__1 = 2;
simplerlangParser.T__2 = 3;
simplerlangParser.T__3 = 4;
simplerlangParser.T__4 = 5;
simplerlangParser.T__5 = 6;
simplerlangParser.T__6 = 7;
simplerlangParser.T__7 = 8;
simplerlangParser.T__8 = 9;
simplerlangParser.T__9 = 10;
simplerlangParser.T__10 = 11;
simplerlangParser.T__11 = 12;
simplerlangParser.T__12 = 13;
simplerlangParser.T__13 = 14;
simplerlangParser.T__14 = 15;
simplerlangParser.T__15 = 16;
simplerlangParser.T__16 = 17;
simplerlangParser.T__17 = 18;
simplerlangParser.T__18 = 19;
simplerlangParser.T__19 = 20;
simplerlangParser.T__20 = 21;
simplerlangParser.T__21 = 22;
simplerlangParser.T__22 = 23;
simplerlangParser.T__23 = 24;
simplerlangParser.T__24 = 25;
simplerlangParser.T__25 = 26;
simplerlangParser.T__26 = 27;
simplerlangParser.T__27 = 28;
simplerlangParser.T__28 = 29;
simplerlangParser.T__29 = 30;
simplerlangParser.T__30 = 31;
simplerlangParser.T__31 = 32;
simplerlangParser.ID = 33;
simplerlangParser.NUM = 34;
simplerlangParser.WS = 35;

simplerlangParser.RULE_prog = 0;
simplerlangParser.RULE_statement_list = 1;
simplerlangParser.RULE_statement = 2;
simplerlangParser.RULE_var_declaration = 3;
simplerlangParser.RULE_create_command = 4;
simplerlangParser.RULE_transform_command = 5;
simplerlangParser.RULE_transform_function = 6;
simplerlangParser.RULE_transform_matrix_declaration = 7;
simplerlangParser.RULE_transform_command_list = 8;
simplerlangParser.RULE_apply_texture_command = 9;
simplerlangParser.RULE_apply_transform_command = 10;
simplerlangParser.RULE_object_props = 11;
simplerlangParser.RULE_object_prop = 12;
simplerlangParser.RULE_prop_name = 13;
simplerlangParser.RULE_color_type = 14;
simplerlangParser.RULE_object_type = 15;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(simplerlangParser.EOF, 0);
	};

	statement_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statement_listContext);
	    } else {
	        return this.getTypedRuleContext(Statement_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitProg(this);
		}
	}


}



class Statement_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_statement_list;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterStatement_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitStatement_list(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_statement;
    }

	var_declaration() {
	    return this.getTypedRuleContext(Var_declarationContext,0);
	};

	transform_matrix_declaration() {
	    return this.getTypedRuleContext(Transform_matrix_declarationContext,0);
	};

	apply_texture_command() {
	    return this.getTypedRuleContext(Apply_texture_commandContext,0);
	};

	apply_transform_command() {
	    return this.getTypedRuleContext(Apply_transform_commandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Var_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_var_declaration;
    }

	ID() {
	    return this.getToken(simplerlangParser.ID, 0);
	};

	create_command() {
	    return this.getTypedRuleContext(Create_commandContext,0);
	};

	NUM() {
	    return this.getToken(simplerlangParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterVar_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitVar_declaration(this);
		}
	}


}



class Create_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_create_command;
    }

	object_type() {
	    return this.getTypedRuleContext(Object_typeContext,0);
	};

	object_props() {
	    return this.getTypedRuleContext(Object_propsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterCreate_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitCreate_command(this);
		}
	}


}



class Transform_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_transform_command;
    }

	transform_function() {
	    return this.getTypedRuleContext(Transform_functionContext,0);
	};

	ID() {
	    return this.getToken(simplerlangParser.ID, 0);
	};

	NUM() {
	    return this.getToken(simplerlangParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterTransform_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitTransform_command(this);
		}
	}


}



class Transform_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_transform_function;
    }


	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterTransform_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitTransform_function(this);
		}
	}


}



class Transform_matrix_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_transform_matrix_declaration;
    }

	ID() {
	    return this.getToken(simplerlangParser.ID, 0);
	};

	transform_command_list() {
	    return this.getTypedRuleContext(Transform_command_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterTransform_matrix_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitTransform_matrix_declaration(this);
		}
	}


}



class Transform_command_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_transform_command_list;
    }

	transform_command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Transform_commandContext);
	    } else {
	        return this.getTypedRuleContext(Transform_commandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterTransform_command_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitTransform_command_list(this);
		}
	}


}



class Apply_texture_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_apply_texture_command;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(simplerlangParser.ID);
	    } else {
	        return this.getToken(simplerlangParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterApply_texture_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitApply_texture_command(this);
		}
	}


}



class Apply_transform_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_apply_transform_command;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(simplerlangParser.ID);
	    } else {
	        return this.getToken(simplerlangParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterApply_transform_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitApply_transform_command(this);
		}
	}


}



class Object_propsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_object_props;
    }

	object_prop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_propContext);
	    } else {
	        return this.getTypedRuleContext(Object_propContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterObject_props(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitObject_props(this);
		}
	}


}



class Object_propContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_object_prop;
    }

	prop_name() {
	    return this.getTypedRuleContext(Prop_nameContext,0);
	};

	ID() {
	    return this.getToken(simplerlangParser.ID, 0);
	};

	NUM() {
	    return this.getToken(simplerlangParser.NUM, 0);
	};

	color_type() {
	    return this.getTypedRuleContext(Color_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterObject_prop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitObject_prop(this);
		}
	}


}



class Prop_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_prop_name;
    }


	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterProp_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitProp_name(this);
		}
	}


}



class Color_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_color_type;
    }


	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterColor_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitColor_type(this);
		}
	}


}



class Object_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = simplerlangParser.RULE_object_type;
    }


	enterRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.enterObject_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof simplerlangListener ) {
	        listener.exitObject_type(this);
		}
	}


}




simplerlangParser.ProgContext = ProgContext; 
simplerlangParser.Statement_listContext = Statement_listContext; 
simplerlangParser.StatementContext = StatementContext; 
simplerlangParser.Var_declarationContext = Var_declarationContext; 
simplerlangParser.Create_commandContext = Create_commandContext; 
simplerlangParser.Transform_commandContext = Transform_commandContext; 
simplerlangParser.Transform_functionContext = Transform_functionContext; 
simplerlangParser.Transform_matrix_declarationContext = Transform_matrix_declarationContext; 
simplerlangParser.Transform_command_listContext = Transform_command_listContext; 
simplerlangParser.Apply_texture_commandContext = Apply_texture_commandContext; 
simplerlangParser.Apply_transform_commandContext = Apply_transform_commandContext; 
simplerlangParser.Object_propsContext = Object_propsContext; 
simplerlangParser.Object_propContext = Object_propContext; 
simplerlangParser.Prop_nameContext = Prop_nameContext; 
simplerlangParser.Color_typeContext = Color_typeContext; 
simplerlangParser.Object_typeContext = Object_typeContext; 
