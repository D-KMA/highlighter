from rest_framework import serializers
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

#--initialize variables
# get all lexers in list format
LEXERS = [lexer for lexer in get_all_lexers()]
# organize all lexers in tuples with two values ('lexer', 'LEXER')
LANGUAGES = sorted([(lexer[1][0], lexer[0]) for lexer in LEXERS])
# get and organize all styles in tuples 
STYLES = sorted([(style, style) for style in get_all_styles()])
# available formatters as of version 0.1.1 
FORMATTERS = sorted(
    ('bbcode', 'bbcode'),
    ('irc', 'irc'),
    ('rtf', 'rtf'),
    ('svg', 'svg'),
    ('text', 'text'),
    ('terminal', 'terminal'),
    ('terminal256', 'terminal256'),
)
LINENUMBER = (
    ('none', 'none')
    ('table', 'table'),
    ('inline', 'inline')
)

class HighlighterSerializer(serializers.Serializer):
    """
    Serializer for the api post request.
    """
    language = serializers.ChoiceField(choices=LANGUAGES, default='python')
    style = serializers.ChoiceField(choices=STYLES, default='default')
    formatter = serializers.ChoiceField(choices=FORMATTERS, default='html')
    linenos = serializers.ChoiceField(choices=LINENUMBER, required=False, default='none')
    noclasses = serializers.BooleanField(required=False, default=True)
    cssclass = serializers.CharField(required=False, default='highlighter')
    hl_lines = serializers.ListField(
        required=False,
        child=serializers.IntegerField(min_value=1) #validator
    )
    nobackground = serializers.BooleanField(required=False, default=False)
    full = serializers.BooleanField(required=False, default=False)
    title = serializers.CharField(required=False)
    separate = serializers.BooleanField(required=False, default=False)
    classprefix = serializers.CharField(required=False, max_length=10)

    # This serializer does not create nor updates any model instance.